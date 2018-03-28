'use strict'
import Validation from './Validation'
import Field from '../Field'

class PasswordValidation extends Validation {
  constructor () {
    super({ id: 'password', name: 'Password Validation', })
  }

  execute (field, parameters) {
    if (field instanceof Field) {

      if (parameters.length && field.value.length < parameters.length) {
        field.addError(`${field.name} must contain at least ${parameters.length} characters.`)
      }

      if (parameters.numbers && (field.value.match(new RegExp(/[a-z]/, 'g')) || []).length < parameters.lowerCase) {
        field.addError(`${field.name} must contain at least ${parameters.lowerCase} lower case letters.`)
      }

      if (parameters.upperCase && (field.value.match(new RegExp(/[A-Z]/, 'g')) || []).length < parameters.upperCase) {
        field.addError(`${field.name} must contain at least ${parameters.upperCase} upper case letters.`)
      }

      if (parameters.numbers && (field.value.match(new RegExp(/[0-9]/, 'g')) || []).length < parameters.numbers) {
        field.addError(`${field.name} must contain at least ${parameters.numbers} numbers.`)
      }

      if (parameters.symbols && (field.value.match(new RegExp(/[!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?`~'\]]/, 'g')) || []).length < parameters.symbols) {
        field.addError(`${field.name} must contain at least ${parameters.symbols} symbol.`)
      }
    }
  }
}

export default PasswordValidation
