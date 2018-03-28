'use strict'
import Validation from './Validation'
import Field from '../Field'

class PhoneValidation extends Validation {
  constructor () {
    super({ id: 'phone', name: 'Phone Number Validation', })
  }

  execute (field, parameters) {
    if (field instanceof Field) {

      if ((field.value.match(new RegExp(/[^0-9()\-. +]/, 'g')) || []).length > 0) {
        field.addError(`Invalid characters in phone number.`)
      } else {

        if ((field.value.match(new RegExp(/[()\-. +]/, 'g')) || []).length > 0) {
          // a formatted phone number

          let stdFormat = new RegExp(/\((\d+)\)\s*(\d+)-(\d+)/)
          if (stdFormat.test(field.value)) {
            let parts = stdFormat.exec(field.value)
            if (parts[1].length < 3) {
              field.addError(`Phone number is missing digits in the area code.`)
            }

            if (parts[2].length < 3) {
              field.addError(`Phone number is missing digits in the exchange.`)
            }

            if (parts[3].length < 4) {
              field.addError(`Phone number is missing digits in the line number.`)
            }

          }
        } else {
          // numeric-only format
          if ((field.value.match(new RegExp(/[0-9]/, 'g')) || []).length === 7) {
            field.addError(`Phone number too short, missing an area code?`)
          }

          if ((field.value.match(new RegExp(/[0-9]/, 'g')) || []).length < 10) {
            field.addError(`Please enter a 10 digit phone number.`)
          } else if ((field.value.match(new RegExp(/[0-9]/, 'g')) || []).length > 11) {
            field.addError(`Invalid phone number, too many digits.`)
          }
        }
      }
    }
  }
}

export default PhoneValidation
