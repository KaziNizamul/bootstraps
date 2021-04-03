let employeeOne = {
    name: 'John Doe',
    age: 24,
    salary: 40000,
    salaryHike() {                      //its same as -> salaryHike: function salaryHike() { ... }
        this.salary += 10000
    }
}

console.log(`before increment : ${employeeOne.salary}`)    /* before  increment : 40000 */
employeeOne.salaryHike()
console.log(`after  increment : ${employeeOne.salary}`)    /* after  increment : 50000  */




















/****************************************************************************************** */

// CREATING NEW EMPLOYEE NOW : 

let employeeTwo = {
    name: 'Sarah Green',
    age: 24,
    salary: 60000        
}

// how to apply salaryHike for employeeTwo now, without making redundant salaryHike() for sarah again ?
 
// SYNTAX :  from_whom_Iam_borrowing . which_function_Iam_borrowing . call (applying_to_whom)
//           employeeOne             . salaryHike                   . call  (employeeTwo)

console.log(`before increment : ${employeeTwo.salary}`)    /* before  increment : 60000 */
employeeOne.salaryHike.call(employeeTwo)
console.log(`after  increment : ${employeeTwo.salary}`)    /* after   increment : 70000 */

//---------------------------------------------
// making this DYNAMIC :
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
employeeOne.salaryHike.call(employeeTwo, 22)
console.log(`after   increment : ${ employeeTwo.salary }`)      /* after   increment : 60022 */