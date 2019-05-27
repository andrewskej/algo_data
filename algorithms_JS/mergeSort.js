function mergeSort(array){
  if(array.length<2) return array;
  var pivot = Math.floor(array.length/2);
  var left = array.slice(0, pivot);
  var right = array.slice(pivot, array.length);
  return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
  var result = [];
  while(left.length && right.length){
    if(left[0]<=right[0]) result.push(left.shift());
    else{
      result.push(right.shift());
    }
  } 
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}