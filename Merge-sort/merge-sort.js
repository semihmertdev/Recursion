function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare the elements of both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // If there are remaining elements in left or right array, add them to the result
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  function mergeSort(array) {
    // Base case: arrays with 0 or 1 elements are already sorted
    if (array.length <= 1) {
      return array;
    }
  
    // Split the array into two halves
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
  }
  
  // Testing the mergeSort function
  console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
  console.log(mergeSort([105, 79, 100, 110]));       // Output: [79, 100, 105, 110]
  