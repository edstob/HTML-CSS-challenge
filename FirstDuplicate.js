function FirstDuplicate(array){

  var originals = new Array(); //stores all the numbers that come up for the first time
  var duplicates = new Array(); //stores all the number that come us twice or more
  
  for (var i = 0; i < array.length; i++) {
    if (!originals.includes(array[i])) { //if the particular element of the array is not yet in originals, it is added to originals
      originals.push(array[i]);
      
    }
    else{
      duplicates.push(array[i]); //otherwise is it added to duplicates
    }
  }
  
  //at this stage, originals is an array of unique values in the array passed through in the beginning
  console.log(originals + "\n" + duplicates);
  
  if (duplicates.length === 0) { //if no dulicates are found
    return -1;
  }
  else{
    return duplicates[0]; //the first duplicate found (which is the question)
  }
  
  
}

var a = [2,1,3,5,3,2];
FirstDuplicate(a);
