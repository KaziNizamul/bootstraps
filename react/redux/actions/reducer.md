- reducer is a pure function.
- REDUCER DOESNT CHANGE THE STATE. It RETURNS THE NEW FORM OF STATE : 
```JS

    return [...state, action.payload]

```
- pureFunc only use to depends on its arguments
- doesn't depends on its external arguments.

```JS
    syntax :    
        const cartReducer = () => {

        }

        export cartReducer;
```
- ALL REDUCERS ARE CALLED when ANY action got dispatch.

```HTML
    Q: agar sabka sab reducer call ho jyega, toh yeh kaam kaise krega..kaise uss action se related reducer, call hoyega.

    A: const cartReducer = (state, action) => {

       }
```

- reducer poore store mein se, sirf ek state ki responsibility leta hai. 
*(store = collection of all state in entire app)*

-  reducer returns the new form of state

```JS
    export const initialState = []
    const cartReducer = (state=initialState, action) => {
        switch(action.type) {
            case 'ADD_TO_CART' : return [...state, action.payload]

            default : return state;
        }
    }

```

- reducers should be split into multiple small reducer
(to manage a small set of data in store)

</br></br></br></br></br></br> <hr>


</br>

<fieldset>
<legend> cart.types.js </legend>

    export const ADD_TO_CART = "ADD_TO_CART";
 
</fieldset>

</br>
<fieldset>
<legend> cart.actions.js </legend>

    import {ADD_TO_CART} from './cart.types';

    export const addToCart = (data) => ({
        type : ADD_TO_CART,
        payload : data
    })
 
</fieldset>

</br>

<fieldset>
<legend> cart.reducer.js </legend>

    import {ADD_TO_CART} from './cart.types';


    export const cartInitialState = [];

    const cartReducer = (state = cartInitialState, action) => {
        case ADD_TO_CART : return [...state, action.payload];

        default : state;
    }
 
</fieldset>
</br>

<fieldset>
<legend> rootReducer.js </legend>

    import {combineReducers} from 'redux';
    import productReducer from '../pages/Home/product.reducer';
    import cartReducer from '../pages/Home/cart.reducer.js';



    const rootReducer = combineReducer ({
        product : productReducer,
        cart : cartReducer
    })
  
    export default rootReducer;
 
</fieldset>

</br>

<fieldset>
<legend> store.js </legend>

    import {createStore} from 'redux';

    const store = createStore(rootReducer);

    export default store;
  
 
</fieldset>
