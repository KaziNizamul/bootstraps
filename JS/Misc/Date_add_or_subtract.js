let inputDate = '12/May/2021'
let days  = 43;
var options = {year: "numeric", month: "short", day: "numeric"};

function calc(fromDate, days){
        
    fromDate = new Date(fromDate)                                 // formatting fromDate
    
    let toDate =  new Date().setDate(fromDate.getDate() - days);  // adding/subtracting days
    
    toDate = new Date();                                          // formatting toDate

    console.log(toDate)                              //  Output Format : Sun May 30 2021 12:11:44 GMT+0530 (India Standard Time)
    console.log(toDate.toLocaleDateString("en-US"))  //  Output Format : 7/6/2021
    console.log(toDate.toLocaleDateString('en-ZA', options).split(' ').join('/')) // Output Format : 06/Jul/2021

}

calc(inputDate, days)
