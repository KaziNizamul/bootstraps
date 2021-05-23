function data() {
  return { a: 1, b: 2 };
}

var {
  a: first,
  b: second,
  c: third = 10
} = data() || {};

console.log(first, second, third);
