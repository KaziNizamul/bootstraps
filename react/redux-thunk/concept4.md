<div align="center"> <strong>setting app.js up</strong> </div> </br> 

**step1:** importing required hooks 
<fieldset>
    <legend> app.js </legend>

```JS
    import React, {useState, useEffect} from "react";
    // useState: for maintaing state, and storing data
    // useEffect : iske andar, request ko dispatch krenge
    //             initial time pe jab application load hoga
    //             tabhi request send krna pdega

    import {useSelector, useDispatch} from 'react-redux';
    // useDispatch : to use the dipatch functionality
    // useSelector : to get data from store

    
    
    function App() {

        return (
            <div>
                <h1>hi</h1>
            </div>
        );
    }


    export default App;

```
</fieldset> </br> </br> </br>


**step2:** setting hooks up
<fieldset>
    <legend> app.js </legend>

```JS

    const dispatch = useDispatch(); // to use dispatch functionality
    const userList = useSelector(nameOfState => nameOfState.userList); // store ke andar, combineReducer mein jo reducer hai, uska naam


    const {loading, users, error} = userList; // userReducer mein dekh, kya kya return kiya gya hai

```
```JS
    
    import { userAction } from "./components/redux/actions/userAction";
    
    ...
    ...

    useEffect(()=>{
        dispatch(userAction())
    },[dispatch])  
                        // isse userAction dispatch ho jyega. 
                        // userAction ke andar api calls hai


```

</fieldset> </br> </br> </br>

**step3:** rendering response
<fieldset>
    <legend> app.js </legend>

```JS

    import User from "./components/user";
    
    ...
    ...

    return (
        <div className="App">
            <h1>hi...</h1>
            {
            loading 
                ? <h2> ...loading </h2> 
                : error 
                    ? <h2>{error}</h2> 
                    : <User users={users} />
            }
        </div>
    );

```

</fieldset> </br> </br> </br>
<fieldset>
    <legend> user.js </legend>

```JS
    import React from 'react';

    const User = ({users}) => {
        return (
            <div>
                <h1> User Component</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th> username  </th>
                            <th> email</th>
                        </tr>
                    </thead>
                    {
                        users.map(user => (
                            <tbody>
                                <tr>
                                    <td> {user.username} </td>
                                    <td> {user.email} </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
        )
    }

    export default User;
   
```

</fieldset> </br> </br> </br>
