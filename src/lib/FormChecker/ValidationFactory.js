'use strict'
import Validation from './validations/Validation'

class ValidationFactory {
  constructor () {
    this._validations = {}
  }

  addValidation (validation) {
    if (validation instanceof Validation) {
      this._validations[validation.name] = validation
    }
  }
  getValidation (validationName) {
    return this._validations[validationName]
  }

  hasValidation (validationName) {
    let hasValidation = false
    if (this._validations[validationName]) {
      hasValidation = true
    }
    return hasValidation
  }
}

export default ValidationFactory
