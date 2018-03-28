'use strict'
import Validation from './Validation'
import Field from '../Field'

class EmailValidation extends Validation {
  constructor () {
    super({ id: 'email', name: 'Email Address Validation', })
  }

  execute (field, parameters) {
    if (field instanceof Field) {

      let atPos = field.value.indexOf('@')

      if (atPos === -1) {
        field.addError(`Incomplete email address.`)
      } else {

        let user = field.value.substr(0, atPos)
        if (!user) {
          field.addError(`Email address is missing a user name.`)
        }

        let domain = field.value.substr(atPos + 1)
        if (!domain) {
          field.addError(`Email address is missing a domain name.`)
        }

        if (domain.indexOf('.') === -1) {
          field.addError(`Invalid domain in email, missing the period?.`)
        } else {
          let tld = domain.substr(domain.indexOf('.') + 1)
          if (!tld) {
            field.addError(`Email address is missing a top level domain (ex .com).`)
          }
        }
      }
    }
  }
}

export default EmailValidation
