function arrayMode(array){
  var sortedArray = array.sort();
  var refinedSet = new Set(array);
  var refinedArray = [...refinedSet];
  var modeArray = new Array(refinedArray.length); //array will keep the count of each number that appears in the array
  var modeArrayVal = 0; //counter for modeArray
  var firstVal = 1;
  var lastVal = 1;
  
  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i+1]) { //comparing the two values
      lastVal++; //the number of values in between the first and last time it shows up increases
    }
    else{
      var total = lastVal - firstVal +1; //find the difference between the two points = how many times it appears
      modeArray[modeArrayVal] = total; //assign to modeArray
      modeArrayVal++
      
      firstVal, lastVal = 1; //reset
    }
    
  }
  
  var max = Math.max(...modeArray); //putting array into Math function
  var maxIndex = modeArray.indexOf(max); //getting the index of the mode
  var mode = refinedArray[maxIndex]; //refinedArray and modeArray have the same number of spaces in memory, 
  //the index will connect the two. refinedArray will hold the value and modeArray will hold how many times it appears.
  
  return mode;
  
  //console.log(sortedArray + "\n" + refinedArray + "\n" + modeArray + "\n" + "The mode is: " + mode);
}

var a = [1, 3, 3, 3, 2];
var b = [2, 2, 2, 1];
var c = [1, 2, 3, 1, 1];
arrayMode(a);
