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


// ---------------------------------------------------------------------------------------------------------------------//
// 						indexOf 								//
// ---------------------------------------------------------------------------------------------------------------------//

indexOf   : can be used when simple things(primitive) needs to be find ( arr.indexOf(-1) ) 
findIndex : expects callback func (use it when things are not-primitive such as objects  )




