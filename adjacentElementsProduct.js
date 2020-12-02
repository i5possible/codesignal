function adjacentElementsProduct(arr) {
  return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
}

/*
inputArray: [3, 6, -2, -5, 7, 3]
Expected Output: 21
*/
