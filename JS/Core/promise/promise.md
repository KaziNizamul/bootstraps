<center> <strong> creating it : </strong></center>

```JS

    const callback = (resolve, reject) => {
        if(Math.random() > 0.5)  
            resolve('ok')
        else 
            reject('err')
    }



    const promiseObj = new Promise(callback); //<---- creating


    console.log(promiseObj)  // Promise {<rejected>: 'rejected'}
```


<center> <strong> consuming it : </strong></center>
<---------------------------------------------------- <strong>WAY 1 : (.then)</strong>--------------------------------------------------->

```JS

    const onFulfilled = (data) => {
        console.log('promise resolved')
    } 

    const onRejected = (data) => {
        console.log('promise rejected!')
    }

    
    <!------------------------ way1 --------------------------->
    
        promiseObj
            .then(onFulfilled).catch(onRejected)


    <!------------------------ way2 --------------------------->
        promiseObj
            .then(onFulfilled, onRejected)

    
```

<br><br><br>
Example1 : 

```JS
    const onDataFetched = (data) => {
    
    data = data.json();
    console.log(data)

    }

    const onReject = (data) =>{
        console.log('reject');
    }


    setTimeout( ()=> {
        console.log('im from settimeout');
    }, 0)

    const promiseObj = fetch('https://jsonplaceholder.typicode.com/users/1');


    promiseObj
        .then(onDataFetched)
    .catch(onReject);
    
    
    console.log('im global console')



```
![](/bootstrapsImages/promise1.png)

<br><br><br>
<------------------------------------------------ <strong>WAY 2 : (async await)</strong>----------------------------------------------->

```JS
    const fetchData = async () => {
            console.log('1')
        const data = await fetch('https://jsonplaceholder.typicode.com/users/1');
        console.log('fetched data', data)
        console.log('2')
        console.log('3')
        const data2 = await fetch('https://jsonplaceholder.typicode.com/users/2');
        console.log('fetched data', data)
        console.log('4')
        console.log('5') 
        console.log('6')
    }
    
    fetchData();
    console.log('ok')
    console.log('ok2')


    Output: 
    1
    ok
    ok2
    response
    2
    3
    response
    4
    5
    6

```

<br><br><br>
<hr><hr>
<center> async await made of using generator </center>

```JS
    function doWhenDataReturned(value) {
        getNextElement.next(value)
    }
                
    function* fetchAsyncDataGenerator() {
        console.log("I am first log")
        const data = yield fetch(
            'https://jsonplaceholder.typicode.com/users/3'
        )
        console.log(data)
        console.log("I am the last log")
    }
                    
    const getNextElement = fetchAsyncDataGenerator()
                    
    const futureData = getNextElement.next()
                    
    console.log("I am from global execution context")
                    
    futureData.value.then(doWhenDataReturned)

```

![](/bootstrapsImages/promise2.png)

