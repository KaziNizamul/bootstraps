#### 1.  elements ?  

-   const elem = React.createElement(
     'h1', 
     {id: 'elem'}, 
     'this is a text inside h1'
    );

<br>

#### 2. when to use a Class Component over a Function Component?
-   Class Component : when `state and lifecycle` methods are needed
-   Function Component : when above is not needed

<br>

#### 3. Pure component ? 
-  ###### rehne de abhi ## ❌

<br>

#### 4.  state ? 
- a object that holds some information,
that may change over lifetime of component.


<br>

#### 5.  props ? 
- inputs to component,
that are passed from parent component.


<br>

#### 6.  state vs props ? 
- state : use to manage and stores component's data 
- props : use to pass data from parent to child component.

<br>

#### 7.  why not to state directly like : `this.state.message = 'Hello world'`? 
- by doing the above, component wont gets re-render.
- by `this.setState({ message: 'Hello World' })` component gets re-render.








