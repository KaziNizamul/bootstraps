const numbers = [1, 2, 3, 4, 5];

numbers.forEach(consoleItems);

function consoleItems(item, index, arr) {
  console.log(item);
}
// output :  1 2 3 4 5
/**
 *      originally it is like the above.
 *      inside forEach, u need to pass a callback function
 *      that callback function will be having item, index and the whole array 🤨
 *
 *      then we just, deal with item alone.
 */

// ---------------------------------------------------------------------

// Compressed & popular version is this :

numbers.forEach((items, index, arr) => {
  console.log(items, index, arr);
});
// output :
// 1 0 [ 1, 2, 3, 4, 5 ]
// 2 1 [ 1, 2, 3, 4, 5 ]
// 3 2 [ 1, 2, 3, 4, 5 ]
// 4 3 [ 1, 2, 3, 4, 5 ]
// 5 4 [ 1, 2, 3, 4, 5 ]
