var originals = new Array(); //unique numbers
var appearances = new Array(); //how many times it is repeated
var count = 0;
var a = 0;

array.sort();



for (var i = 0; i < array.length ; i++)
{
  if (array[i] == array[i+1])
  {
    count++;
  }
  else
  {
    appearances[a] = count + 1;
    originals[a] = array[i];
    count = 0;
    a++;
  }
}

var max = Math.max.apply(null, appearances);
var index = appearances.indexOf(max);
console.log(originals[index]);
