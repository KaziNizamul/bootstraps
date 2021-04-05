
// // When things are normal 
// var x = 7;

// function getName() {
//     console.log(`hey there!`)
// }

// console.log(x)                      // 7 
// console.log(getName())              // hey there!

// **************************************************************





// When you make them UN-TRADITIONAL
// and trying to print, even before they r defined

console.log(x)                          // undefined   
console.log(getName())                  // hey there! 


var x = 7;

function getName() {
    console.log(`hey there!`)
}


/**
 *      so,       x  : undefined
 *                getName  : hey there!
 * 
 * 
 *      CONCEPT : when you r in phase1 of execution context, the JS, will assign every variable as undefined
 *                and every function holds its full code. 
 *              
 *                Phase1 ->    
 *                              x : undefined
 *                              getName: full function
 *              
 *                Phase2 ->             
 *                           1. when you are at 2nd phase, at Line1 only, we are saying "console.log(x)"
 *                              so, obviously x as undefined will get print, coz as of yet, no code is there, to assign any value to it.
 *                           
 *                           2. console.log(getName()) 
 *                              since we already have the full code already assigned to our 'getName' at Phase1
 *                              THAT FULL CODE IS GETTING EXECUTED NOW, it will have its own execution contexts etc
 *                              and it will give output as 'hey there!'
 * 
 *      
 */




