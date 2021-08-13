'use strict';

class RangeValidator {
  constructor(fromValue, toValue){
    this.fromValue = fromValue;
    this.toValue = toValue;
  }


  set fromValue (newFromValue) {
    if(isNaN(newFromValue) || typeof newFromValue !== 'number') {
      throw new TypeError('Value from must be number');
    }

    if(newFromValue > this.toValue) {
      throw new RangeError('To value must be less than from value');
    }

    this._fromValue = newFromValue;
  }

  get fromValue() {
    return this._fromValue;
  }

  set toValue(newToValue) {
    if(isNaN(newToValue) || typeof newToValue !== 'number') {
      throw new TypeError('Value to must be number');
    }

    if(newToValue < this.fromValue) {
      throw new RangeError('From value must be less than from value');
    }
    this._toValue = newToValue;
  }

  get toValue() {
    return this._toValue;
  }

  get range(){
    return [this.fromValue, this.toValue];
  }

  get validate(number){
    if(isNaN(number) || typeof number !== 'number') {
      throw new TypeError('Number to must be number');
    }

    if(number >= this.fromValue && number <= this.toValue){
      return number;
    }

    throw new RangeError("This number is not in range");
  }
}

const range1 = new RangeValidator(2, 10);
