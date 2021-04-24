// Implement Quick Sort

function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift();

  let left = array.filter((el) => el < pivot);
  let right = array.filter((el) => el >= pivot);

  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
}

module.exports = {
  quickSort,
};

/*
bryan@LAPTOP-F699FFV1:/mnt/c/Users/15512/Google Drive/a-A-September/weeks/week7-outer/week-7/projects/D2/first-attempt/algorithms-sorting-starter/algorithms-sorting-starter-master/problems$ npm test

> bubble_sort_project_solution@1.0.0 test /mnt/c/Users/15512/Google Drive/a-A-September/weeks/week7-outer/week-7/projects/D2/first-attempt/algorithms-sorting-starter/algorithms-sorting-starter-master
> mocha

 bubbleSort(array):  [ -1, 2, 3, 3, 4, 7 ]


  bubbleSort()
    ✓ should sort the elements of the array in increasing order, in-place

  swap()
    ✓ should swap the elements at the given indices, mutating the original array

  selectionSort()
    ✓ should sort the elements of the array in increasing order, in-place

  insertionSort()
    ✓ should sort the elements of the array in increasing order, in-place

  merge()
    ✓ should return a single array containing elements of the original sorted arrays, in order

  mergeSort()
    when the input array contains 0 or 1 elements
      ✓ should return the array
    when the input array contains more than 1 element
      ✓ should return an array containing the elements in increasing order

  quickSort()
    when the input array contains 0 or 1 elements
      1) should return the array
    when the input array contains more than 1 element
      2) should return an array containing the elements in increasing order


  7 passing (210ms)
  2 failing

  1) quickSort()
       when the input array contains 0 or 1 elements
         should return the array:
     AssertionError: expected undefined to deeply equal []
      at Context.<anonymous> (test/05-quick-sort-spec.js:9:32)
      at processImmediate (internal/timers.js:456:21)

  2) quickSort()
       when the input array contains more than 1 element
         should return an array containing the elements in increasing order:
     AssertionError: expected undefined to deeply equal [ -1, 2, 3, 3, 4, 7 ]
      at Context.<anonymous> (test/05-quick-sort-spec.js:16:49)
      at processImmediate (internal/timers.js:456:21)



npm ERR! Test failed.  See above for more details.
bryan@LAPTOP-F699FFV1:/mnt/c/Users/15512/Google Drive/a-A-September/weeks/week7-outer/week-7/projects/D2/first-attempt/algorithms-sorting-starter/algorithms-sorting-starter-master/problems$ npm test

> bubble_sort_project_solution@1.0.0 test /mnt/c/Users/15512/Google Drive/a-A-September/weeks/week7-outer/week-7/projects/D2/first-attempt/algorithms-sorting-starter/algorithms-sorting-starter-master
> mocha

 bubbleSort(array):  [ -1, 2, 3, 3, 4, 7 ]


  bubbleSort()
    ✓ should sort the elements of the array in increasing order, in-place

  swap()
    ✓ should swap the elements at the given indices, mutating the original array

  selectionSort()
    ✓ should sort the elements of the array in increasing order, in-place

  insertionSort()
    ✓ should sort the elements of the array in increasing order, in-place

  merge()
    ✓ should return a single array containing elements of the original sorted arrays, in order

  mergeSort()
    when the input array contains 0 or 1 elements
      ✓ should return the array
    when the input array contains more than 1 element
      ✓ should return an array containing the elements in increasing order

  quickSort()
    when the input array contains 0 or 1 elements
      ✓ should return the array
    when the input array contains more than 1 element
      ✓ should return an array containing the elements in increasing order


  9 passing (149ms)

*/
