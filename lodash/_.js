

const _ = {
	clamp ( num, lower, upper ) {
    let lowerClampedValue = Math.max(num, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange ( number, start, end ) {
    if ( !end ) {
      end = start;
      start = 0;
    }; 
    if ( start > end ) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = ''; 
    if (number >= start && number < end ) {
       return isInRange = true;
    } else {
       return isInRange = false; 
    }
  },
  words (string) {
    return string.split(' ');
  },
  pad ( string, length ) {
    if ( length <= string.length){
      return string
    }
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString = ' ';
    paddedString = paddedString.repeat(startPaddingLength) + string + paddedString.repeat(endPaddingLength);
    return paddedString
  },
  has ( object, key ) {
    let hasValue = object[key];
    if ( hasValue !== undefined ){
      hasValue = true;
    } else {
      hasValue = false;
    } 
    return hasValue;
  },
  invert (object) {
		invertedObject = {};
    for (let property in object) {
      let propertyValue = object[property];
      invertedObject[propertyValue] = property;
    }
    return invertedObject;
  },
  findKey (object, predicate ) {
		for (let key in object) {
			let value = object[key];
      console.log(value);
      let predicateReturnValue = predicate(object[key]);
      console.log(predicateReturnValue);
     	if ( predicateReturnValue ) {
        return key;
      }
      return undefined;
    }
  },
  drop ( array, n ) {
    if ( n === undefined ) {
    	n = 1;  
  	} 
    let droppedArray = array.slice(n);
    return droppedArray;
  },
  dropWhile ( array, predicate ) {
    let dropNumber = array.findIndex((element, index) => {
     	return !predicate(element, index);
    } );
    let droppedArray = this.drop(array,dropNumber);
    return droppedArray;
  },
  chunk (array, size ) {
   if ( size === undefined ) { size = 1; }
   let arrayChunks = []; 
   for ( i = 0; i < array.length; i + size ) {      
      let arrayChunk  = array.slice( i, i = i + size ); 
      arrayChunks.push( arrayChunk )
    }
		return arrayChunks;
  }

  
}




// Do not write or modify code below this line.
module.exports = _;