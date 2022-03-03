**action :**

    Q: Kya hota hai ?
    A:  ab kuch change hota hai,
        yeh application ko yeh batata hai ki ---> koi change hua hai


    Q: dikhta kaisa h?
    A:  basically yeh ek "information" hai,
        in JS Object form.

<br><br><br>

**Example:** create a ACTION on submitting the form

```JS
    {
        'type' : 'ADD_TO_USER',     // must have property
        'payload' : {               // variable name 
            'name' : 'myName',
            'email': 'my@email.com'
        }
        // payload is the `INFORMATION TO SEND`

    }

```

</br> </br> 
**Example:** send the above ACTION to store

```JS

    store.dispatch(
        {
            'type' : 'ADD_TO_USER',     // must have property
            'payload' : {               // variable name 
            'name' : 'myName',
            'email': 'my@email.com'
        }
                                        // payload is the `INFORMATION TO SEND`
    )

```

</br>

***Flow  Diagram :***
    ![](/bootstrapsImages/reduxAction.png)


</br> </br> </br>
<hr>
</br> </br>

***Now A Example to demonstrate it :***

**step1:** on button, attaching a onClick
**step2:** uss onClick function pe ab dispatch attach krunga
**step3:** dispatch mein daalne ke liye, action object banaunga/ actionCreator banaunga
**step4:** ab uss actionCreator ko dispatcher mein daal dunga


```HTML
file: html


    <button onClick={handleOnClick}> click me </button>
```

```JS
file: html



    const dispatchToStore = useDispatch();

    const handleOnClick = () => {
        dispatchToStore() <----- TODO
    }

```

```JS 
file:  filename.action.js
    

    // method: normal object
    export const showCart = { 
        type : 'SHOW_CART'
    }


    // method: action creator
    export const showCart = () => {
        type : 'SHOW_CART'
    }

```

```JS
file: html



    const dispatchToStore = useDispatch();

    const handleOnClick = () => {
        dispatchToStore(showCart()) // ✅
    }

```

</br></br></br><hr>

TIP : how to create model in react:
```JS
    export const SHOW_CART = 'SHOW_CART';
```
<hr>
