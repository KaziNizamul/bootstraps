
 // --------------------------------------------1. ORDER of printing object : --------------------------------------

 let obj = {
    '3':'a', '2':'b','f':'f', '5':'5'
}

// console.log(obj) -> {2: 'b', 3: 'a', 5: '5', f: 'f'}
// meaning : integers agar hai, toh sorted order mein print ho lenge, unke baad, dusre kuch ayega 



// --------------------------------------------2. creating a clone of obj (deepcopy) : --------------------------------------
/** 
    1. manually :
    
         let user = { name : 'user', age : 30 } 
         let clone = { }
         
         for(let key in user) {
              clone[key] = user[key]
         }
        

    2. Object.assign(clone, {name, age})


    3.  JSON.parse(JSON.stringify(obj1))
  
    4. loadash's :          _.cloneDeep(obj1)
 



*/
