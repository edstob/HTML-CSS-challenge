function arrayMode(array){
  
    //refinedSet is the unique numbers in the original array
    var refinedSet = new Set(array.sort());
    var refinedArray = [...refinedSet];
    var countArray = new Array(refinedArray.length);
    
    for (var i = 0; i < countArray.length; i++) 
    {
      var count = 1;
      
      for (var k = 0; k < array.length; k++) {
        
        
        
        if (array[k] === array[k+1]) {
          count++;

        }
        else{
          countArray[i] = count;
          count = 1;
          i++;
          
          
        }

      }
      
    }
    
    var max = Math.max(...countArray);
    //console.log(max);
    var finalIndex = countArray.indexOf(max);
    //return refinedArray[finalIndex];
    console.log(refinedArray[finalIndex]);
        
}

var a = [1, 2, 2, 1, 2];
arrayMode(a);
