<center> <strong> Generator </strong> </center>

-  Example 1

```JS
    function *special(){
        yield 1;
        yield 2;
        yield 3;
    }

    const data = special();

    console.log(data.next()); // Object { value: 1, done: false }
    console.log(data.next()); // Object { value: 2, done: false }
    console.log(data.next()); // Object { value: 3, done: false }
    console.log(data.next()); // Object { value: undefined, done: true }

```

- <strong> NOTE :</strong> 
```
    Jab tak pehla ".next()" hit nahi hota,
    tab tak, execution context create nahi hoyega yaha.

    "1" return krne ke baad, exec context PAUSE hoyega
    phir agla "next()" aane ka wait krega 
```

<hr>

- Example 2: 
```JS
    function *genFunc(){
        const num1 = 10
        const num2 = yield num1   //<----- yaha yield dekhte hi RIGHT mein likhe hue cheez return ho jyega.
                                  //       aur jo assigment hona tha 'num1' ka woh reh jyega adhoora
        yield 7 + num2
    }

    const data = genFunc()



    console.log(data.next())  // Output : 10

    console.log(data.next(4)) // agar yaha se kuch pass kiya gya h + KOI ASSIGNMENT ADHOORA REH GYA H, toh usko value mil jyegi
                              // const num2 = 4 
                              
                              // Output: 11 (yield (7+4))
    
    
    console.log(data.next())  // undefined, true
```