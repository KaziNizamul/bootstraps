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


console.log(`before  increment : ${ employeeTwo.salary }`)      /* before  increment : 60000 */
employeeOne.salaryHike.apply(employeeTwo, 22)
console.log(`after   increment : ${employeeTwo.salary}`)        /* after   increment : 60022 */

/**
 *                 just continuing from where we left at call()
 *                 copying pasting those things as it is,
 *                 and JUST CHANGED "call" with "apply" 
 *                 and got this error : 
 * 
                  "CreateListFromArrayLike called on non - object"


                  Solution: we cant pass argument just like that in "apply"
                            we need to pass it in array 

 * 
 */

console.log(`before  increment : ${ employeeTwo.salary }`)      /* before  increment : 60000 */
employeeOne.salaryHike.apply(employeeTwo, [22])
console.log(`after   increment : ${employeeTwo.salary}`)        /* after   increment : 60022 */