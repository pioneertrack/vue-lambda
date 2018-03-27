'use strict'
import FieldCollection from './FieldCollection'
import FieldGroup from './FieldGroup'

class Form extends FieldCollection {
  constructor ({ name, } = { }) {
    super({ name, })
    this._groups = []
    this._groupsByName = {}
    this._isSubmitted = false
  }

  get groups () {
    return this._groups
  }

  get groupCount () {
    return this._groups.length
  }

  addGroup (group) {
    if (group instanceof FieldGroup) {
      this._groups.push(group)
      this._groupsByName[group.id] = group
    }
  }

  getGroup (groupId) {
    return this._groupsByName[groupId]
  }

  hasGroups () {
    let hasGroups = false
    if (this._groups.length > 0) {
      hasGroups = true
    }
    return hasGroups
  }

  hasGroup (groupId) {
    let hasGroup = false
    if (this._groupsByName[groupId]) {

      hasGroup = true
    }
    return hasGroup
  }

  isSubmitted () {
    return this._isSubmitted
  }

  isUnsubmited () {
    return !this._isSubmitted
  }

  submit () {
    this._isSubmitted = true
  }
}

export default Form
