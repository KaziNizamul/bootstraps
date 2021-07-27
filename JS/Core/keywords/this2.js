
/* ----------------------------- inside function ---------------------------- */
/* ---------------------------------- moral --------------------------------- */
this.table = "global table";

function cleanTable(){
  console.log(this.table);
}

cleanTable();      // it tries to access the global scope,
                   // but that would be wrong, as we are inside a function, and we shouldnt access the global scope
                   // output: global table ❌

// to make it strictly use things, available inside function

// function cleanTable() {
//   'use strict'; <-------------- can be used 
//   console.log(this.table);
// }







/* ------------- using "a predefined function" in another places ------------ */

/**  defining "another places"    */
// 1.garage table
this.garage = {
    table: "garage table"
}

// 2. johns Room's table
let johnsRoom = {
    table: "johns room table"
}

/**  predefined function          */
function cleanTable(){
    console.log(`cleaning ${this.table}`);
}


// using predefined function in johnsRoom
cleanTable.call(johnsRoom);      // output : "cleaning johns room table"
cleanTable.call(this.garage)     // output : "cleaning garage table"