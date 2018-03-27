'use strict'

import Form from './Form'
import Field from './Field'
import FieldGroup from './FieldGroup'
import ValidationFactory from './ValidationFactory'

import IntegerValidation from './validations/IntegerValidation'
import RequiredValidation from './validations/RequiredValidation'
import EmailValidation from './validations/EmailValidation'
import PhoneValidation from './validations/PhoneValidation'

class FormChecker {
  constructor (formData) {
    this._fields = {}
    this._validationFactory = new ValidationFactory()

    // Set up Validation Factory
    let integerValidation = new IntegerValidation()
    let requiredValidation = new RequiredValidation()
    let emailValidation = new EmailValidation()
    let phoneValidation = new PhoneValidation()

    this._validationFactory.addValidation(integerValidation)
    this._validationFactory.addValidation(requiredValidation)
    this._validationFactory.addValidation(emailValidation)
    this._validationFactory.addValidation(phoneValidation)

    this._form = new Form({
      name: formData.name,
    })

    for (let fieldId in formData.fields) {

      // Create field object
      let field = new Field({
        id: fieldId,
        name: formData.fields[fieldId].name,
        value: formData.fields[fieldId].value,
      })

      // Create validators and add to the field
      for (let validationName in formData.fields[fieldId].validations) {
        field.addValidation(this._validationFactory.getValidation(validationName))
      }

      // Create formatters and add to the field

      let groupId = formData.fields[fieldId].group
      if (groupId) {
        if (!this._form.hasGroup(groupId)) {
          // New group, create it and add to the form
          let fieldGroup = new FieldGroup({
            id: groupId,
          })
          this._form.addGroup(fieldGroup)

          // Add getter api to Form Checker instance
          Object.defineProperty(this, groupId, {
            get: function () {
              return this._form.getGroup(groupId)
            },
          })
        }
        // Add the current field to its group
        this._form.getGroup(groupId).addField(field)
      }

      // Add new field to the list
      this._form.addField(field)
      this._fields[fieldId] = field

      // Add field getter to FormChecker object
      Object.defineProperty(this, fieldId, {
        get: function () {
          return this._form.getField(fieldId)
        },
      })
    }
  }

  get $name () {
    return this._form.name
  }

  get $groups () {
    return this._form.groups
  }

  get $groupCount () {
    return this._form.groupCount
  }

  get $fields () {
    return this._form.fields
  }

  get $fieldCount () {
    return this._form.fieldCount
  }

  get $errors () {
    return this._form.errors
  }

  get $errorCount () {
    return this._form.errorCount
  }

  get $firstError () {
    return this._form.firstError
  }

  get $error () {
    return this._form.error
  }

  get $hasGroups () {
    return this._form.hasGroups()
  }

  get $hasFields () {
    return this._form.hasFields()
  }

  $hasErrors () {
    return this._form.hasErrors()
  }

  $isValid () {
    return this._form.isValid()
  }

  $isInvalid () {
    return this._form.isInvalid()
  }

  $isTouched () {
    return this._form.isTouched()
  }

  $isUntouched () {
    return this._form.isUntouched()
  }

  $isDirty () {
    return this._form.isDirty()
  }

  $isPristine () {
    return this._form.isPristine()
  }

  $isSubmitted () {
    return this._form.isSubmitted()
  }

  $isUnsubmitted () {
    return this._form.isUnsubmitted()
  }

  $validate () {
    this._form.validate()
  }
}

export default FormChecker
