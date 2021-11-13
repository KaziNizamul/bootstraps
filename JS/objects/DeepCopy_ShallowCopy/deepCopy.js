/* -------------------------------------------------------------------------- */
/*                          how to avoid shallow copy                         */
/* -------------------------------------------------------------------------- */


const employee = {
    name: 'Siddharth',
    age: 35
};


// const copyOfEmployee = employee;  ❌🤷‍♀️



// ----------------------------- WAY 1 ---------------------
const copyOfEmployee = JSON.parse(JSON.stringify(employee)); // ✅


// ----------------------------- WAY 2 ---------------------
let copyOfEmployee = Object.assign({}, employee) // ✅










console.log(employee, 'employee');
/*
{ name: 'Siddharth', age: 35 } employee
*/

