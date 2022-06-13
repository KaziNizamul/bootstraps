/* -------------------------------------------------------------------------- */
/*                          how to avoid shallow copy                         */
/* -------------------------------------------------------------------------- */


const employee = {
    name: 'Siddharth',
    age: 35
};


// const copyOfEmployee = employee;  ❌🤷‍♀️



// ----------------- WAY 1 : JSON.stringify ---------------------
const copyOfEmployee = JSON.parse(JSON.stringify(employee)); // ✅


// ----------------- WAY 2 : Object.assign -----------------------
let copyOfEmployee = Object.assign({}, employee)             // ✅


// ----------------- WAY 3 : spread operator ---------------------
let copyOfEmployee = { ...employee }                         // ✅


// ----------------- WAY 4 : structuredClone ---------------------
let copyOfEmployee = structuredClone(employee)               // ✅





copyOfEmployee.age = 99;


console.log({copyOfEmployee, employee});
/*
{ name: 'Siddharth', age: 35 } employee
{ name: 'Siddharth', age: 99 } copyOfEmployee
*/

