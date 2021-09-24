 
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

    
2.[arrow] :
    function myRegularFunction() {
        const myArrowFunction = () => {
            console.log(arguments);     // logs { 0: 'a', 1: 'b', length: 2 } ????????? whyyyyy??? 
        }
        myArrowFunction('c', 'd');
    }
    
    myRegularFunction('a', 'b');

    CONCEPT : they have access to the arguments object of the closest non-arrow parent function.




    `How to fix this and print arrow's arguments  ?` : use rest parameter feature 
    function myRegularFunction() {
        const myArrowFunction = (...args) => {
          console.log(args);         // logs ['c', 'd']
        }
        myArrowFunction('c', 'd');
    }
    myRegularFunction('a', 'b'); 