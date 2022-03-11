<div align="center"> <strong>creating full redux folder</strong> </div> </br> 

**step1:** creating constant file
<fieldset>
    <legend> userConstants.js </legend>

```JS
    export const GET_USER_REQUEST = 'GET_USER_REQUEST';
    export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
    export const GET_USER_FAIL = 'GET_USER_FAIL';
```
</fieldset> </br> </br> </br>

**step2.1:** creating reducer
<fieldset>
    <legend> userReducer.js </legend>

```JS
    import { GET_USER_FAIL, GET_USER_SUCCESS, GET_USER_REQUEST } from "../constants/userConstants"


    export const userReducer = (state={users:[]}, action) => {
        switch(action.type){
            case GET_USER_REQUEST: 
                return {loading:true, users:[]};
            case GET_USER_SUCCESS:
                return {loading:false, users: action.payload};
            case GET_USER_FAIL: 
                return {loading:false, error: action.payload};
            default: 
                return state;
        }
    }  

```
</fieldset> </br>

**step2.2:** connecting reducer to store
<fieldset>
    <legend> store.js </legend>

```JS
    import { userReducer } from "./components/redux/reducers/userReducer";
     
    ...
    ...

        const rootReducer = combineReducers({
            userList : userReducer // alias userReducer as userList
        })   

    ...
    ...
```
</fieldset> </br> </br> </br>






