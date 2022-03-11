<div align="center"> <strong>creating actions</strong> </div> </br> 

**step1:** creating action file
<fieldset>
    <legend> userActions.js </legend>

```JS
   import axios from 'axios';  // to make async calls

    export const userAction = async ( dispatch ) => { // put async coz it is actually async function
        
        try {  // .then also we can use but it will result in callback hell.
               // so we are using try catch block

        } catch (error){

        }
    }
```
<div align="center"> ⬇️ making call </div> </br>

```JS
    import axios from 'axios';  // to make async calls

    export const userAction = async ( dispatch ) => { // put async coz it is actually async function
        
        try {  // .then also we can use but it will result in callback hell.
               // so we are using try catch block

        } catch (error){

        }
    }

```

<div align="center"> ⬇️ writing all dispatches </div> </br>

```JS
    try {  
        dispatch({type: GET_USER_REQUEST})  
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');

        dispatch({type: GET_USER_SUCCESS, payload: data}) 
    } catch (error){
        dispatch({
            type: GET_USER_FAIL,
            payload: error.data && error.response.data.message 
                ? error.response.data.message 
                : error.message
        }) 
    }
```
<div align="center"> ⬇️ so final one is : </div> </br>

```JS
    import axios from 'axios';
    import { GET_USER_FAIL, GET_USER_SUCCESS, GET_USER_REQUEST } from '../constants/userConstants';

    export const userAction = async ( dispatch ) => {
        try {
            dispatch({type: GET_USER_REQUEST})
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');

            dispatch({type: GET_USER_SUCCESS, payload: data}) 
        } catch (error){
            dispatch({
                type: GET_USER_FAIL,
                payload: error.data && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
            }) 
        }
    }

```

</fieldset> </br> </br> </br>



