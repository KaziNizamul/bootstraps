const numbers = [1, 2, 3, 4, 5];

numbers.map(doubleEach);
console.log(numbers);

function doubleEach(item, index, arr) {
  return item * 2;
}
// output : [1, 2, 3, 4, 5];
/**
 *      originally it is like the above.
 *      inside map, u need to pass a callback function
 *      that callback function will be having item, index and the whole array 🤨
 *
 *      then we just, deal with item alone.
 *
 *      BUT !! 😡
 *      why its not giving me the output as expected ??
 *
 *
 *      Reason :
 *              it doesnt change the existing array,
 *              it creates a new array and return that
 */

const doubleNumbers = numbers.map(doubleEach);
console.log(doubleNumbers);
// output: [2, 4, 6, 8, 10];

// ------------------------------------------------------------------

const products = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 2,
  },
  {
    name: "phone",
    price: 500,
    count: 10,
  },
];

const totalPrice_to_pay = products.map((item) => {
  return item.price * item.count;
});

console.log(totalPrice_to_pay);
// output : [5000, 3000, 5000];

// ------------------------------------------------------------------

// Returning things as objects :

const product = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 2,
  },
  {
    name: "phone",
    price: 500,
    count: 10,
  },
];

// const totalPrice_to_pay = products.map((item) => {
//   return item.price * item.count;
// });

const totalprice_to_pay = product.map((item) => ({
  name: item.name,
  totalPrice: item.price * item.count,
}));
console.log(totalprice_to_pay);

// output:
// [
//   { name: "laptop", totalPrice: 5000 },
//   { name: "desktop", totalPrice: 3000 },
//   { name: "phone", totalPrice: 5000 },
// ];

// ----------------------------------------------------------------

const str = ["1", "2", "3", "4", "5"];

const nums = str.map(Number);

console.log(nums);
// output : [1, 2, 3, 4, 5];
