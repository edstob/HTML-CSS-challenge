function arrayMode(array){
  var sortedArray = array.sort();
  var refinedSet = new Set(array);
  var refinedArray = [...refinedSet];
  var modeArray = new Array(refinedArray.length);
  var modeArrayVal = 0;
  var firstVal = 1;
  var lastVal = 1;
  
  var e = 0;
  
  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i+1]) {
      lastVal++;
    }
    else{
      var total = lastVal - firstVal +1;
      modeArray[modeArrayVal] = total;
      modeArrayVal++
      
      firstVal, lastVal = 1;
    }
    
  }
  
  var max = Math.max(...modeArray);
  var maxIndex = modeArray.indexOf(max);
  var mode = refinedArray[maxIndex];
  
  //return mode;
  
  console.log(sortedArray + "\n" + refinedArray + "\n" + modeArray + "\n" + "The mode is: " + mode);
}

var a = [1, 3, 3, 3, 2];
var b = [2, 2, 2, 1];
var c = [1, 2, 3, 1, 1];
arrayMode(a);
