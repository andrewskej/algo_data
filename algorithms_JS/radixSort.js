var counter = [[]];
function radixSort(array,d){ //d is #of digits of the biggest given number
  var mod = 10; //digit count
  for(var i=0; i<d; i++, mod *=10){
    for(var j=0; j<array.length; j++){
      var bucket = parseInt(array[j]%mod);
      if(counter[bucket]==null){
        counter[bucket]=[];
      }
      counter[bucket].push(array[j]);
    }
    var pos = 0;
    for(var j=0; j<counter.length; j++){
      var value = null;
      if(counter[j]!=null){
        while((value = counter[j].shift()) != null){
          array[pos++] = value;
        }
      }
    }
  }
  
  return array;
}