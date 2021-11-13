// --------------------------------------------------- EXAMPLE 1 ---------------------------------------------------

function data() {
  return [1, 2, 3, 9, 8, 7, 6];
}

// ----------------------
// var temp = data();

// var first = temp[0]
// var second = temp[1]
// var third = temp[2]

// ----------------------

var [first, , third, ...fourth] = data();     // ignored 2nd

console.log(first, third, fourth);            //  1, 3, [9, 8, 7, 6]





// --------------------------------------------------- EXAMPLE 2 ---------------------------------------------------
let arr = [1,2,3, [4,5]]
let [a,,c,[d,e]] = arr

console.log({a,c,d,e})                       // {a: 1, c: 3, d: 4, e: 5}
