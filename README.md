# Algorithms in JavaScript

This project contains implementations of the Fibonacci sequence (both iterative and recursive) and the Merge Sort algorithm in JavaScript.

## Table of Contents

- [Fibonacci Sequence](#fibonacci-sequence)
  - [Iterative Fibonacci](#iterative-fibonacci)
  - [Recursive Fibonacci](#recursive-fibonacci)
- [Merge Sort](#merge-sort)
- [Usage](#usage)

# Fibonacci Sequence

## Iterative Fibonacci

The iterative version of the Fibonacci sequence function generates the sequence up to the `n`-th element using a loop.

```javascript
function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  
  let fibArray = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
}
```

## Recursive Fibonacci

The recursive version of the Fibonacci sequence function generates the sequence up to the n-th element using recursion.

```javascript
function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let fibArray = fibsRec(n - 1);
  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  return fibArray;
}
```

## Merge Sort

The Merge Sort algorithm is a divide-and-conquer algorithm that sorts an array by recursively dividing it into two halves, sorting each half, and then merging the sorted halves.

#### Helper Function `merge`: 
This function merges two sorted arrays into a single sorted array.

```javascript
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```

## Recursive Merge Sort
The Merge Sort function recursively sorts an array.

```javascript
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
```

## Usage

To use these functions, simply include them in your JavaScript project. Here are some examples:

```javascript
console.log(fibs(8));    // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110]));       // Output: [79, 100, 105, 110]
```

