'use strict'
import Validation from './Validation'
import Field from '../Field'

class PhoneValidation extends Validation {
  constructor () {
    super({ name: 'phone', })
  }

  execute (field) {
    if (field instanceof Field) {
      if (field.value.length < 7) {
        field.addError(`Please enter a full ${field.name}`)
      }
      if (field.value.length === 7) {
        field.addError(`${field.name} is missing an area code.`)
      }
    }
  }
}

export default PhoneValidation
