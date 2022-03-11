<div align="center"> <strong>store creation & connecting the store</strong> </div> </br> 

**step1:**
<fieldset>
    <legend> store.js </legend>

```JS
    import { createStore, combineReducers, applyMiddleware } from "redux";
    import thunk from 'redux-thunk';
    import { composeWithDevTools } from 'redux-devtools-extension';


    const rootReducer = combineReducers({

    })                          // TODO(unavailable as of now)

    const initialState = {};    // TODO(unavailable as of now)



    const middleware = [thunk]; // middleware multiple bhi ho skta hai. 
    // kabhi custom middleware bhi aa skta hai, so, better sabka ek array banake rakho


    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));








    export default store;
```

</fieldset>

</br> </br> </br> 


**step2:**

<fieldset>
    <legend> index.js </legend>

```JS
    import React from "react";
    import ReactDOM from "react-dom";
    import "./index.css";
    import App from "./App";

    ReactDOM.render(
            <App />,
    document.getElementById("root")
    );  

```
<div align="center"> ⬇️ redux setup </div> </br>

```JS

    import { Provider } from 'react-redux';
    ReactDOM.render(
        <Provider>
            <App />
        </Provider>,


    document.getElementById("root")
    );  
```

<div align="center"> ⬇️  connect redux with store now </div> </br>

```JS
    import store from './store.js';


    <Provider store={store}> 
        <App />
    </Provider>,

```


</fieldset>