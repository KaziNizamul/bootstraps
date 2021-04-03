let employeeOne = {
    name: 'John Doe',
    age: 24,
    salary: 40000,
    salaryHike(hike) {                      
        this.salary += hike 
    }
}

let employeeTwo = {
    name: 'Sarah Green',
    age: 24,
    salary: 60000        
}


// console.log(`before  increment : ${ employeeTwo.salary }`)      /* before  increment : 60000 */
// employeeOne.salaryHike.bind(employeeTwo, 25)
// console.log(`after   increment : ${employeeTwo.salary}`)        /* after   increment : 60000 */


/**
 *   what ?
 *   why its showing 60000? 
 *   no error .. and not correct output also! why?
 * 
 *   CONCEPT : employeeOne.salaryHike.bind(employeeTwo, 25) will return a function 
 *             1. either we can store that function in some variable and use it anywhere
 *             2. or, we can execute it rightway there only
 * 
 *             1.  let hikedSalary =  employeeOne.salaryHike.bind(employeeTwo, 25)      storing the function in a variable
 *                 hikedSalary();                                                       and executing it
 *             2.  employeeOne.salaryHike.bind(employeeTwo, 25) ();                     awesome way to execute it rightaway
 *  
 */


 
// way1 
let hikedSalary =  employeeOne.salaryHike.bind(employeeTwo, 25)    
hikedSalary();                                                  
console.log(employeeTwo.salary)                                      // 60025

// way2
employeeOne.salaryHike.bind(employeeTwo, 25)()
console.log(employeeTwo.salary)                                      // 60025