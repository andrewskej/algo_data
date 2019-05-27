function insertionSort(array){
    var temp;
    for(var i=0; i<array.length; i++){
      temp = array[i];
      for(var j=i-1; j>=0 && temp< array[j]; j--){
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
      return array;
  }