const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const left = array.slice(0, Math.floor(array.length/2))
  const right = array.slice(left.length)
  console.log('left:', left)
  console.log('right:', right)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const merged = []
  let leftIndex = 0, rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      merged.push(left[leftIndex])
      leftIndex++  //<--!!!
    }else{
      merged.push(right[rightIndex])
      rightIndex++
    }
  }
  //what the hell is this?
  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const answer = mergeSort(numbers);
console.log(answer);