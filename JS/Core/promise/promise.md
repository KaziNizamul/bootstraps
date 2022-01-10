<center> <strong> creating it : </strong></center>

```JS
    const promiseObj = new Promise(callback);

    const callback = (resolve, reject) => {
        if(Math.random() > 0.5)  
            resolve('ok')
        else 
            reject('err')
    }


    console.log(promiseObj) // Promise {<rejected>: 'rejected'}
```


<center> <strong> consuming it : </strong></center>

```JS

    <!-- ---------------------- way1 ------------------------- -->
    
        promiseObj
            .then(onFulfilled)
            .catch(onRejected)


    <!-- ---------------------- way2 ------------------------- -->
        promiseObj
            .then(onFulfilled, onRejected)


    const onFulfilled = (data) => {
        console.log('promise resolved')
    } 

    const onRejected = (data) => {
        console.log('promise rejected!)
    }
    
```
