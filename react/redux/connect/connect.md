- connect provides a function called 'connect'

```JS
    connect(mapStateToPropsFunc, mapDispatchToPropFunc)
```

```JS

    mapStateToPropsFunc : 
        - argument : state 
        - main jo state hai, usme se koi bhi state ko agar, 
          iss component mein, props ki tarah bhejna hai, 
          tab yeh use krte h

        - whenever state changes, 
          props value get change,
          hence component will re-render

        - we RETURN object_of_props 



    mapDispatchToPropsFunc : 
        - argument :  dispatch func
                      (dispatch func is used to dispatch action object)
                      (action object we get from actionCreator)
       
        - we RETURN object_of_props 

```
</br></br></br></br> <hr>
<fieldset>
    <legend> cart.controller.js </legend>

    

         class CartController extends Component {
             render(){
                 return (
                     <Cart
                        onOpenCart = {this.props.openCart}
                        isCartOpen = {this.props.isCartOpen}
                        onCloseCart= {this.props.onCloseCart}
                     />
                 )
             }
         }       

        const mapStateToPropsFunc = (state) => ({
            isCartOpen : state.cart.show_product
        })

        const mapDispatchToPropsFunc = (dispatch) => ({
            openCart  : () => dispatch(showCart()).
            closeCart : () => dispatch(closeCart())
        })



</fieldset> </br>


- react-redux provides us **Provider** 
to connect whole application with redux

<fieldset>
    <legend> app.js </legend>

    import {Provider} from 'react-redux';
    import store from './store.js';

    function App(){
        return (
            <Provider store={store}>
                <Header />
                <Main />
            </Provider>
        )
    }

</fieldset> </br>

<fieldset>
    <legend> store.js </legend>

    import { createStore } from 'react-redux';
    import rootReducer from './rootReducer';


    const store = createStore (
        rootReducer
    )

    export default store;

</fieldset> </br>


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
 
</fieldset> </br>

