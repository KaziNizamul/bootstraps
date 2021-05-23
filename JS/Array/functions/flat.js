

var arr = [1, 2, [3, 4], [5, [6, 7], 8]]

console.log(

    arr.flat(0),            // no change 
    arr.flat(1),            // one level will open up

    arr.flat(Infinity)      // all level will open up

)

// output:
// [1, 2, [3, 4], [5, [6, 7], 8]];
// [ 1, 2, 3, 4, 5, [ 6, 7 ], 8 ]
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]
