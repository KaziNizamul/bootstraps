// same as find function 

var arr = [{ a: 1 }, { a: 2 }];

console.log(


	arr.findIndex(function match(v) {            // callback func is being used
	return v.a > 1;
    	})
    

);

// output : 1

// -----------------------------------
/**
 *      arr.findIndex( (v) =>  {                 // easier way
 *          return (v.a > 1)
 *      });
 */
