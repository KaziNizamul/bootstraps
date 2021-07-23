/* -------------------------------------------------------------------------- */
/*                                     var                                    */
/* -------------------------------------------------------------------------- */

var a = 100;
{
    var a = 99;
    console.log(a); // 99 // shadowed global "a"
}
console.log(a);     // 99 // and since memory was same for it, thats why, "a" orginally got modified



/* -------------------------------------------------------------------------- */
/*                                     let/const                              */
/* -------------------------------------------------------------------------- */

let a = 100;
// const a = 100;
{
    let a = 99;
    // const a = 99;

    console.log(a); // 99  // shadowed "script scope" "a"
}
console.log(a);     // 100 // since let/const is block scoped, "a" is not modified



/* -------------------------------------------------------------------------- */
/*                              illegal shadowing                             */
/* -------------------------------------------------------------------------- */

/* ------ example 1: ------ */
let a = 20;
{
    var a = 30;
}
console.log(a); //SyntaxError: Identifier 'a' has already been declared
/**
 *  jab koi apna scope boundary cross krta hai, 
 *  tabb err aata h.
 * 
 *  idhar, var block scope na hoke,
 *  global scope chala jyega  // kyu jyega ? idk
 *  jisse uska boundary cross hoyega aur baahar wale ke memory space ke saath conflict hone se
 *  err show hoyega */


/* ------ example 2: ------ */
let a = 20;
function something() {
    var a = 30;
}
console.log(a);
// ab var function scope hai, 
// isiliye, func's var is inside its boundary ✔


/* ------ example 3: ------ */

let a = 20;
{
    let a = 30;
}
// bahar wala, apna print krega
// andar wala apna print krega ✔


/* ----- example 4: ------- */
var a = 20;
{
    let a = 30;
}
console.log(a);
// bahar wala global scoped hai hi,
// andar wala local,

// bahar wala, apna print krega
// andar wala apna print krega ✔

