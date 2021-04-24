![](real.png)![](2.png)![](3.png)


![bst](https://blog.penjee.com/wp-content/uploads/2015/11/binary-search-tree-sorted-array-animation.gif)


![bst](https://i.pinimg.com/originals/e2/9a/31/e29a31c78bcc0d07c612adc77acc09a0.gif)


![](https://blog.penjee.com/wp-content/uploads/2015/12/linear-vs-binary-search-best-case.gif)


![](https://blog.penjee.com/wp-content/uploads/2015/12/linear-vs-binary-search-worst-case.gif)


![](https://blog.penjee.com/wp-content/uploads/2015/12/optimal-binary-search-tree-from-sorted-array.gif)


![](https://blog.penjee.com/wp-content/uploads/2015/11/binary-search-tree-insertion-animation.gif)


# Working of Binary Search

Normally, we iterate over an array to find if an element is present in an array or not. But think about a case when the data which we are provided is a sorted one, then performing a normal search will do the work but shouldn't we extract something useful from the fact that our data is already sorted?

So, let's have a look at the working of the binary search and find out how to perform an optimized search on a sorted data.


In binary search, we directly hit the middle element and then compare it with the element to be found.

hitting middle element in binary search

![](bst-mid-ele.png)
If the element to be found is equal to the middle element, then we have already found the element, otherwise, if it is smaller, then we know it is going to lie on the left side of it, else, on the right.

![](ya.png)
![](a1.png)


right side with larger and left side with smaller elements in binary search

Let's take the case when the element to be found is smaller than the middle element, then we will repeat the same procedure on the left subarray by hitting the middle element of the left subarray.

element smaller than middle element in binary search

binary search

So, this is how binary search works. But before discussing the code of the binary search let's first compare binary search with the traditional search.

![](b-vs-trda.png)

![](https://www.codesdope.com/staticroot/images/algorithm/binary_search.gif)

Let's talk about the binary search. In binary search, without doing any analysis, we can see that the array is divided into half its initial size each time. So even in the worst case, it would end up searching only 
log
2
n
 elements.

reduction to half of size of problem in binary search

Thus, binary search is a O(lgn) algorithm.
## Important Note on Sorting

Before we move on, really internalize the fact that `binarySearch` will **only
work if the data has been sorted**. Given the dictionary example above, you can
see how quickly things would go off the rails if the "s" section containing
"stupendous" were placed *before* the "m" section. If this were the case, our
`binarySearch` method would never be able to find our target word, because we
would only ever search the section "m" through "z". Today, know that all arrays
in your test cases have already been sorted. You'll be learning all *sorts* of
methods for sorting arrays later in this module, so get excited!


```js
const recurBSearch = ( nums, targetNum ) => {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  // if nums has no length, return false because we've run out of items to
  // search and haven't found targetNum
  if ( nums.length === 0 ) {
    return false;
  }
  // determine the slice point
  let mid = Math.floor( ( startIndex + endIndex ) / 2 )
  // create "left half" and "right half" arrays
  if ( targetNum < nums[ mid ] ) {
    // if targetNum is less than the slice point, return this search on the left half
    let left = nums.slice( 0, mid );
    return recurBSearch( left, targetNum );
  } else if ( targetNum > nums[ mid ] ) {
    //slice :first param begin index , end index where we cut (cut before end index)
    let right = nums.slice( mid + 1 );
    return recurBSearch( right, targetNum );
  } else {
    return true;
  }
  // if it's not greater than or less than, we know it's equal so return true
}
let oddNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNums = [1, 2, 3, 4, 5, 42069, 7, 8, 9, 10];
console.log('recurBSearch( oddNums, 6 ): ', recurBSearch( oddNums, 6 ));
console.log("recurBSearch( evenNums, 6 ): ", recurBSearch(evenNums, 6));
```
