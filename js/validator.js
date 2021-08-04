class RangeValidator {
  constructor(fromValue, toValue){
    this.fromValue = fromValue;
    this.toValue = toValue;
  }

  set fromValue (newFromValue) {
    if(newFromValue < tnewToValue) {
      throw new RangeError('From value must be less than to value');
    }

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


  set toValue (newToValue) {
    // if(this.toValue < this.fromValue) {
    //   throw new RangeError('To value must be more than from value');
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
}







const validate1 = new RangeValidator(2, 10);