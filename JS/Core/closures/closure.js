// function x() {
//     var i = 1;
//     setTimeout(function() {
//         console.log(i);
//     }, 3000);
//     console.log("Namaste Javascript");
// }
// x();


function print() {
    
    for (var i = 1; i <= 5; i++) {
        var j = i
        setTimeout(function () {
            console.log(j);
        }, i*1000)
    }
}

print();