'use strict'

class Validation {
  constructor ({ name, }) {
    this._name = name
  }

  get name () {
    return this._name
  }

  execute () {
    // extended validation must implement this
  }
}

export default Validation
