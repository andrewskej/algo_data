function bubbleSort(array){
    var temp;
    for(var i=0; i<array.length-1;i++){
      for(var j=0;j<array.length-1;j++){
        if(array[j]>array[j+1]){
          temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
        }
      }
    }
    return array;
  }