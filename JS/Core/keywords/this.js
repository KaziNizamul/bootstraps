/* -------------------------------------------------------------------------- */
/*                                    House                                   */
/* -------------------------------------------------------------------------- */


/* ---------------------------- creating a table ---------------------------- */

this.table = 'window table';                /** global scope, viz windowScope */
console.log(window.table);                  /**  cross verifying              */



/* ---------------------------- creating a garage --------------------------- */

this.garage = {                   // created garage at global scope
  table:'garage-table'
}
console.log(this.garage.table);   // accessing garage's table from global scope
console.log(window.garage.table); // same thing, as we are in global/window scope
                                  // output : garage-table



 /* ------------------------- creating a privacy room ------------------------ */
// 1. understanding separation of global and private 
let johnsRoom = {                 // this is not a globally accessible room,
                                  // coz not created with "this.johnsRoom"
                                  // so its a private room.
  table: 'johns table'
}

console.log(this.johnsRoom.table);  //  accessing it with global rights
                                    //  "TypeError: Cannot read property 'table' of undefined
console.log(johnsRoom.table);       //  output: johns table 


// 2. how to access private room's table?
let johnsRoom = { 
  table: 'johns table',
  cleanTable(){
    console.log(`cleaning ${this.table}`)
  }
}

// console.log(this.johnsRoom.cleanTable());            // again, this is private room,
                                                        // we cant access private room with "this"(global access)

console.log(johnsRoom.cleanTable());                    //  that "this" inside console is, having scope of johnsRoom only.
                                                        //  output: cleaing johns table




