 
**1. syntax :**
>*  normal function :  var add = function(x, y) {
                                     return x + y;
                       };


>*  arrow function :  var add = (x, y) => {
                            return x + y;
                       };



<br>
<br>

**2. argument binding :** 


>1. function myfunc() {
    console.log(arguments)    // [Arguments 1, 2, 3, callee: ƒ, Symbol(Symbol.iterator)]
    console.log(...arguments) //  1 2 3
}

    myfunc(1, 2, 3) 

    
>2.[arrow] :
    function myRegularFunction() {
        const myArrowFunction = () => {
            console.log(arguments);     // logs { 0: 'a', 1: 'b', length: 2 } ????????? whyyyyy??? 
        }
        myArrowFunction('c', 'd');
    } 

    myRegularFunction('a', 'b');

CONCEPT : `they have access to the arguments object of the closest non-arrow parent function.`




`How to fix this and print arrow's arguments  ?` : use rest parameter feature 
>function myRegularFunction() {
    const myArrowFunction = (...args) => {
        console.log(args);         // logs ['c', 'd']
    }
    myArrowFunction('c', 'd');
}
myRegularFunction('a', 'b'); 

<br>
<br>

**3. this :**

![](/bootstrapsImages/arrow_this1.jpg)
![](/bootstrapsImages/arrow_this2.jpg)
![](/bootstrapsImages/arrow_this3.jpg)
![](/bootstrapsImages/arrow_this4.jpg)

<br>

**4. constructor :**  
> yaha koi dikkat nai
![](/bootstrapsImages/arrow_constructor1.jpg)
> pr, `this` lexically solve hota hai, arrow func mein, so, 
![](/bootstrapsImages/arrow_constructor2.jpg)

    
<br>
<br>

**5. return :** 
> arrow mein implicit return hota hai.
