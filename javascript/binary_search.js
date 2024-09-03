// Iterative Version.
// function binarySearch(arr, target) {
//   // type your code here
//   let low = 0, high = arr.length - 1;
//   while (low <= high) {
//     let mid = Math.ceil((low + high) / 2);
//     if (arr[mid] === target)
//       return true;
//     else if (arr[mid] < target)
//       low = mid + 1;
//     else
//       high = mid - 1;
//   }

//   return false;
// }

// Recursive Version.
function binarySearch(arr, target) {
  // type your code here
  if (arr.length === 0)
    return false;

  const mid = Math.ceil((arr.length - 1) / 2);
  if (arr[mid] === target)
    return true;
  else if (arr[mid] < target)
    return binarySearch(arr.slice(mid+1), target);
  else 
    return binarySearch(arr.slice(0, mid), target);
}

// Iterative Version
// BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
// function binarySearchIndex(arr, target) {
//   let low = 0, high = arr.length - 1;
//   while (low <= high) {
//     const mid = Math.ceil((low + high) / 2);
//     if (arr[mid] === target)
//       return mid;
//     else if (arr[mid] < target)
//       low = mid + 1;
//     else 
//       high = mid - 1;
//   }

//   return -1;
// }

// Recursive Version
// BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
function binarySearchIndex(arr, target) {
  if (arr.length === 0)
    return -1;

  const mid = Math.ceil((arr.length - 1) / 2);
  if (arr[mid] === target)
    return mid;
  else if (arr[mid] < target) {
    const resIdx = binarySearchIndex(arr.slice(mid+1), target);
    return resIdx === -1 ? resIdx : resIdx + mid + 1;
  } else
    return binarySearchIndex(arr.slice(0, mid), target);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 2");
  console.log("=>", binarySearchIndex([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", binarySearchIndex([3, 5, 9], 10));

  // UNCOMMENT FOR BONUS
  // console.log("");
  // console.log("Expecting: 0");
  // console.log("=>", binarySearchIndex([1, 2, 3], 1));

  // console.log("");

  // console.log("Expecting: -1");
  // console.log("=>", binarySearchIndex([4, 7, 20], 100));

  console.log("");
  console.log("Expecting: -1");
  console.log("=>", binarySearchIndex([], 5));

  console.log("");
  console.log("Expecting: -1");
  console.log("=>", binarySearchIndex([1], 5));

  console.log("");
  console.log("Expecting: -1");
  console.log("=>", binarySearchIndex([1], 0));

  console.log("");
  console.log("Expecting: 0");
  console.log("=>", binarySearchIndex([1], 1));

  console.log("");
  console.log("Expecting: -1");
  console.log("=>", binarySearchIndex([1, 3], 0));

  console.log("");
  console.log("Expecting: -1");
  console.log("=>", binarySearchIndex([1, 3], 2));

  console.log("");
  console.log("Expecting: -1");
  console.log("=>", binarySearchIndex([1, 3], 4));

  console.log("");
  console.log("Expecting: 0");
  console.log("=>", binarySearchIndex([1, 3], 1));

  console.log("");
  console.log("Expecting: 1");
  console.log("=>", binarySearchIndex([1, 3], 3));
}

module.exports = {
  binarySearch,
  binarySearchIndex
};

// Add a written explanation of your solution
