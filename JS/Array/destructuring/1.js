function data() {
  return [1, 2, 3, 9, 8, 7, 6];
}

// ----------------------
// var temp = data();

// var first = temp[0]
// var second = temp[1]
// var third = temp[2]

// ----------------------

var [first, , third, ...fourth] = data();

console.log(first, third, fourth);
