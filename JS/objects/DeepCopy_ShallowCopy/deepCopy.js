/* -------------------------------------------------------------------------- */
/*                          how to avoid shallow copy                         */
/* -------------------------------------------------------------------------- */


const employee = {
    name: 'Siddharth',
    age: 35
};


// const copyOfEmployee = employee;  ❌🤷‍♀️
const copyOfEmployee = JSON.parse(JSON.stringify(employee)); // ✅


console.log(employee, 'employee');
/*
{ name: 'Siddharth', age: 35 } employee
*/

