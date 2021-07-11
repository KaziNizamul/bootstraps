/* ---------- CONCEPT : string ka set, humlog araam se bana skte h. --------- */
// let arr = ["a","a", "abc","abc","a/a","a/c","a/a","a#4{}","a#4{}","a#4"]
// let sets = new Set(arr);
// console.log(sets); // "a", "abc", "a/a", "a/c", "a#4{}", "a#4"

// CONCLUSION: str ka sets bann jaata h.likewise hum sab obj ko str mein badlenge
// aur unka set bana ke pata kr lenge ki, same h ki different




/* -------------------------- STEP 1.1 Conversion : ------------------------- */
/* ---------------------- convert each obj to stringify --------------------- */

let strObj = arr.map(JSON.stringify);



 /* -------------------------- STEP 1.2 Conversion : ------------------------- */
/* ------------------------- make set of objects now ------------------------ */

let uniqueSet = new Set(strObj);

/* ----------------------- it will create a set like: ----------------------- */
/* -------------------------------- 0: {... } ------------------------------- */
/* -------------------------------- 1: {... } ------------------------------- */
/* -------------------------------- 2: {... } ------------------------------- */






/* ----------------------- STEP 2.1 Converting back : ----------------------- */
 /* ------------------------- convert that set to Arr ------------------------ */

var setArr = Array.from(uniqueSet)
 


/* --------------------------------- STEP 4: -------------------------------- */
/* ------------------------- parse each elem in arr, ------------------------ */
/* -------------------- and push them back to output arr -------------------- */

for (let i of setArr) {
   arr.push(JSON.parse(i))
}




