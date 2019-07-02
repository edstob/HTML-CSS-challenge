function FirstDuplicate(array){

  var originals = new Array();
  var duplicates = new Array();
  
  for (var i = 0; i < array.length; i++) {
    if (!originals.includes(array[i])) {
      originals.push(array[i]);
      
    }
    else{
      duplicates.push(array[i]);
    }
  }
  
  console.log(originals + "\n" + duplicates);
  
  if (duplicates.length === 0) {
    return -1;
  }
  else{
    return duplicates[0];
  }
  
  
}

var a = [2,1,3,5,3,2];
FirstDuplicate(a);
