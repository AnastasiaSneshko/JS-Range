'use strict'

class RangeValidator {
  constructor(fromValue, toValue){
    this.fromValue = fromValue;
    this.toValue = toValue;
  }


  set fromValue (newFromValue) {
    if(isNaN(newFromValue) || typeof newFromValue !== 'number') {
      throw new TypeError('Value from must be number');
    }

    if(newFromValue < 0) {
      throw new RangeError('Value from must be positive number');
    }

    this._fromValue = newFromValue;
  }
  get fromValue() {
    return this._fromValue;
  }

  set toValue(newToValue) {
    // if(newFromValue < newToValue){
    //   throw new Error("To value must be less than from value");
    // }

    if(isNaN(newToValue) || typeof newToValue !== 'number') {
      throw new TypeError('Value to must be number');
    }

    if(newToValue < 0) {
      throw new RangeError('Value to must be positive number');
    }
    this._toValue = newToValue;
  }
  get toValue() {
    return this._toValue;
  }

  getRange(toValue, fromValue){
    const arrayRange = [];
    for (let i = toValue; i <= fromValue; i++) {
      arrayRange.push(i);
    }
    return arrayRange;
  }

  getValidate(num,toValue, fromValue){
    if(num >= toValue && num <= fromValue){
      return num;
    }
    else{
      throw new RangeError("This number is not in range");
    }
  }
};


const range1 = new RangeValidator(2, 10);
const range2 = new RangeValidator(1, 20);