const {lstatSync, readdirSync, readFileSync, existsSync, writeFileSync, createWriteStream} = require ('fs')
const {join, basename} = require ('upath')
const yaml = require ('js-yaml')

const isDirectory = source => lstatSync (source).isDirectory ()
const getDirectories = source =>
  readdirSync (source).map (name => join (source, name)).filter (isDirectory)

let serverless = {
  "service": "DevService",
  "plugins": [
    "serverless-offline",
  ],
  "provider": {
    "name": "aws",
    "runtime": "nodejs6.10",
  },
  "functions": {},
}

let environmentVars = {}

let addNewLine = false;
let envFinalContent = ""

getDirectories ('./functions').forEach ((dir) => {
  let yamlFile = join (dir, "serverless.yml")
  let envFile = join (dir, ".env.yaml")

  if (existsSync (envFile)){
    let envContent = readFileSync(envFile, 'utf-8')
    envContent.replace(/^\s*[\r\n]/gm)
    if(!addNewLine){
      envFinalContent += envContent
      addNewLine = true
    } else {
      envFinalContent += "\n" + envContent
    }
  }

  if (existsSync (yamlFile)) {
    let contents = readFileSync (yamlFile, 'utf-8')
    let doc = yaml.safeLoad (contents)

    if (doc.provider.environment) {
      environmentVars = Object.assign (environmentVars, doc.provider.environment)
    }

    let basePath = doc.custom.customDomain.basePath
    for (let funcName in doc.functions) {
      const copy = Object.assign ({}, doc.functions[funcName])
      copy.handler = join (basename (dir), copy.handler)
      serverless['functions'][funcName] = copy

      // loop through events
      if (copy.events) {
        copy.events.forEach ((event) => {
          let type = Object.keys (event)[0]
          if (type === 'http') {
            event['http'].path = join (basePath, event['http'].path)
          }
        })
      }
    }
  }
})


let envYaml = yaml.load (envFinalContent, {json : true})

writeFileSync('./functions/.env.yaml', yaml.dump(envYaml), 'utf-8')

serverless['provider']['environment'] = environmentVars

let output = yaml.safeDump (serverless)
writeFileSync ('functions/serverless.yml', output, 'utf-8')
