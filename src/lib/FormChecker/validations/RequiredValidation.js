'use strict'
import Validation from './Validation'
import Field from '../Field'

class RequiredValidation extends Validation {
  constructor () {
    super({ id: 'required', name: 'Required Validation', })
  }

  execute (field, parameters) {
    if (field instanceof Field) {
      if (!field.value) {
        let fieldName = field.name || field.id
        field.addError(fieldName + ' is required.')
      }
    }
  }
}

export default RequiredValidation
