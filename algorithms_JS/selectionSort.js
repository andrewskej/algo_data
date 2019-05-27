function selectionSort(array){
    var temp, minIndex;
    for(var i=0; i<array.length-1;i++){
      minIndex = i;
      for(var j=i+1; j<array.length; j++){
        if(array[j]<array[minIndex]){
          minIndex = j;
        }
      }
      temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
    }
      return array;
  }