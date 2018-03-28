'use strict'
import Validation from './validations/Validation'

class ValidationFactory {
  constructor () {
    this._validations = {}
  }

  addValidation (validation) {
    if (validation instanceof Validation) {
      this._validations[validation.id] = validation
    }
  }
  getValidation (validationId) {
    return this._validations[validationId]
  }

  hasValidation (validationId) {
    let hasValidation = false
    if (this._validations[validationId]) {
      hasValidation = true
    }
    return hasValidation
  }
}

export default ValidationFactory
