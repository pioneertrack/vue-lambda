'use strict'
import Field from './Field'

class FieldCollection {
  constructor ({ id, name, } = {}) {
    this._id = id
    this._name = name
    this._fields = []
    this._fieldsByName = {}
    this._isDirty = false
    this._isTouched = false
  }

  get id () {
    return this._id
  }

  get name () {
    return this._name || this._id.charAt(0).toUpperCase() + this._id.slice(1)
  }

  get fields () {
    return this._fields
  }

  get fieldCount () {
    return this._fields.length
  }

  get errors () {
    let errors = []
    for (let f = 0; f < this._fields.length; f++) {
      errors.push(...this._fields[f].errors)
    }
    return errors
  }

  get firstError () {
    return this.errors[0]
  }

  get error () {
    return this.firstError
  }

  get errorCount () {
    return this.errors.length
  }

  addField (field) {
    if (field instanceof Field) {
      this._fields.push(field)
      this._fieldsByName[field.id] = field
    }
  }

  getField (fieldId) {
    return this._fieldsByName[fieldId]
  }

  hasField (fieldId) {
    let hasField = false
    if (this._fieldsByName[fieldId]) {
      hasField = true
    }
    return hasField
  }

  validate (mode) {
    for (let f = 0; f < this._fields.length; f++) {
      if (mode === 'force') {
        // touch all fields to force validation
        this._fields[f].touch()
      }
      this._fields[f].validate()
    }
  }

  hasFields () {
    let hasFields = false
    if (this._fields.length > 0) {
      hasFields = true
    }
    return hasFields
  }

  hasErrors () {
    let hasErrors = false
    if (this.errors.length > 0) {
      hasErrors = true
    }
    return hasErrors
  }

  isValid () {
    let isValid = true
    if (this.errors.length > 0) {
      isValid = false
    }
    return isValid
  }

  isInvalid () {
    return !this.isValid()
  }

  isTouched () {
    let isTouched = false
    for (let f = 0; f < this._fields.length; f++) {
      if (this._fields[f].isTouched) {
        isTouched = true
        break
      }
    }
    return isTouched
  }

  isUntouched () {
    return !this.isTouched()
  }

  isDirty () {
    let isDirty = false
    for (let f = 0; f < this._fields.length; f++) {
      if (this._fields[f].isDirty) {
        isDirty = true
        break
      }
    }
    return isDirty
  }

  isPristine () {
    return !this.isDirty()
  }
}

export default FieldCollection
