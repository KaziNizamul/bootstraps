// **************************Example 1 :***********************

// print firstNames of all whose having age==30 
const users = [
    {firstname:'akshay', lastname:'saini', age:30},
    {firstname:'elon', lastname:'musk', age:31},
    {firstname:'brett', lastname:'zhang', age:30}
]

const output = users.reduce(function(acc, curr){
        if(curr.age==30) acc.push(curr.firstname)
        return acc
}, [])

console.log(output) //  ['akshay', 'brett']



// **************************Example 2 :***********************
const users = [
    {firstname:'akshay', lastname:'saini', age:30},
    {firstname:'elon', lastname:'musk', age:31},
    {firstname:'brett', lastname:'zhang', age:30}
]

const output = users.reduce(function(acc, curr){
      if(acc[curr.age]) 
          acc[curr.age] += 1
      else 
          acc[curr.age] = 1


      return acc
}, {})

console.log(output) // {30:2, 31:1}
