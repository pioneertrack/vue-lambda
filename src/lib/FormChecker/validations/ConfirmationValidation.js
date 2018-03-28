
'use strict'
import Validation from './Validation'
import Field from '../Field'

class ConfirmationValidation extends Validation {
  constructor () {
    super({ id: 'confirmation', name: 'Confirmation Field Validation', })
  }

  execute (field, parameters) {
    if (field instanceof Field) {
      if (field.value !== field.form.getField(parameters).value) {
        field.addError(field.form.getField(parameters).name + ` confirmation doesn't match.`)
      }
    }
  }
}

export default ConfirmationValidation
