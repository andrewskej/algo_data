//k means the biggest number of given numbers

function countingSort(array,k){
    var count = [], result = [];
    for(var i=0;i<=k;i++){
      count[i]=0;
    }
    
    for(var j=0; j<array.length; j++){
      count[array[j]] += 1;
    }
    
    for(i=0; i<k; i++){
      count[i+1] += count[i];
    }
    
    for(j=0; j<array.length; j++){
      result[count[array[j]]-1] = array[j];
      count[array[j]] -=1;
    }
    return result;
  }