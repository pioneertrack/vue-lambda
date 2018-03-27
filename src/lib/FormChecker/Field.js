'use strict'
import Validation from './validations/Validation'

class Field {
  constructor ({ id, name, value, defaultValue, prompt, }) {
    this._id = id
    this._name = name
    this._value = value
    this._validations = []
    this._formats = {}
    this._errors = []
    this._isTouched = false
    this._isDirty = false
  }

  get id () {
    return this._id
  }

  get name () {
    return this._name || this._id.charAt(0).toUpperCase() + this._id.slice(1)
  }

  get value () {
    return this._value
  }

  set value (value) {
    this._value = value
    this._isDirty = true
    this._isTouched = true
  }

  get errors () {
    return this._errors
  }

  get firstError () {
    return this._errors[0] || ''
  }

  get error () {
    this._firstError()
  }

  hasErrors () {
    let hasErrors = false
    if (this._errors.length > 0) {
      hasErrors = true
    }
    return hasErrors
  }

  isValid () {
    let isValid = true
    if (this.hasErrors) {
      isValid = false
    }
    return isValid
  }

  isInvalid () {
    return !this.isValid()
  }

  isDirty () {
    return this._isDirty
  }

  isPristine () {
    return !this._isDirty
  }

  isTouched () {
    return this._isTouched
  }

  isUntouched () {
    return !this._isTouched
  }

  touch () {
    this._isTouched = true
  }

  validate () {
    this._errors = []
    for (let v = 0; v < this._validations.length; v++) {
      this._validations[v].execute(this)
    }
  }

  addValidation (validation) {
    if (validation instanceof Validation) {
      this._validations.push(validation)
    }
  }

  addError (error) {
    this._errors.push(error)
  }
}

export default Field
