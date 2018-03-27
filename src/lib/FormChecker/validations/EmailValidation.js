/* eslint-disable no-unused-vars */
import Validation from './Validation'
import Field from '../Field'

class EmailValidation extends Validation {
  constructor () {
    super({ name: 'email', })
  }

  execute (field) {
    if (field instanceof Field) {
      let atPos = field.value.indexOf('@')
      if (atPos === -1) {
        field.addError(`Missing @ sign in ${field.name}`)
      } else {
        let user = field.value.substr(0, atPos)
        if (!user) {
          field.addError(`Missing user id in ${field.name}`)
        }

        let domain = field.value.substr(atPos + 1)
        if (!domain) {
          field.addError(`${field.name} is missing domain name`)
        }

        let tld
        if (domain.indexOf('.') === -1) {
          field.addError(`Missing period in ${field.name} domain name.`)
        } else {
          tld = domain.substr(domain.lastIndexOf('.') + 1)
        }
      }
    }
  }
}

export default EmailValidation
