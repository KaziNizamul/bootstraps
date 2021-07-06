var arr = [{ a: 1 }, { a: 2 }];

console.log(
	
    arr.find(function match(v) {                  // callback func is being used
	return v.a > 1;
    })
	
	
);

// output : { a: 2 }


// -----------------------------------
/**
*      arr.find( (v) =>  {                 	// easier way
*          return (v.a > 1)
*      });
*/
