 
/* -------------------------------------------------------------------------- */
/*                                   syntax                                   */
/* -------------------------------------------------------------------------- */
/*
 *  normal function :  var add = function(x, y) {
                                     return x + y;
                       };
 * 

 *  arrow function :  var add = (x, y) => {
                            return x + y;
                       };
 * 
 */


/* -------------------------------------------------------------------------- */
/*                              argument binding                              */
/* -------------------------------------------------------------------------- */
1.  function myfunc() {
        console.log(arguments)    // [Arguments 1, 2, 3, callee: ƒ, Symbol(Symbol.iterator)]
        console.log(...arguments) //  1 2 3
    }

    myfunc(1, 2, 3) 

    
2. 