- #### some gotchas : 
    - can only be used in `FUNCTIONAL COMPONENTS`
    - `can not` be wrapped under conditional statements


</br>

- #### How it works: 

    ![](/bootstrapsImages/usestate1.png)
    - useState hook will return two things.
    - one is `current state`, another is `a function that will allow is to change the current state.` 


</br>
<hr> </br> </br>

- #### Ways to use setState : 
    - way 1: 
![](/bootstrapsImages/usestate2.png)
 
    - way 2: 
![](/bootstrapsImages/usestate4.png)

</br>
<hr> </br> </br>

- in `class component's constructor` 
the state only gets evaluated `once`.
reason : constructor ko toh ekhi baar visit krega na execution. 
</br>

but,
in `function component`, the expression like:

```JS
    const [count, setCount] = useState(4);
```
this "4" will get called, 
every single time, we run our functions like 
`decrementFunction` `incrementFunction`.

if something like really computing function is being passed inside useState like: 
```JS
    const [count, setCount] = useState(fibonacci);
```
this will slow down the app.

</br></br></br>

- solution for it is :
```JS
    const [count, setCount] = useState(()=>{
        console.log('run function');
        return 4;
    });



    /* passing a function like this in useState.
    This will run only once when component will gets render. */
```


</br>

- if we accidently pass something like :
```JS
    function fibo(){
        console.log('fibo');
        return 4;
    }

    const [count, setCount] = useState(fibo);

    /* again it will re-render the whole component, again and again.
    so better use the above one, the anonym arrow function method 
    coz its called only once, while component gets initialised.*/
    ```

</br>
<hr> </br> </br>

- #### dealing with objects in useState:
```JS
    const [state, setState] = useState({count : 4, theme : 'blue'});
    const [count, theme] = state;

    function decreament(){
        setState(prevState => {
            return {count : prevState.count - 1}
        })
    }


    /* with this what will happen is:
    whole of `{count : 4, theme : 'blue'}` 
    will get override with {count : 5}  
    
    so to handle this, we use to write it like :
    */
   function decreament(){
        setState(prevState => {
            return {...prevState, count : prevState.count - 1}
        })
    }
```


</br>
<hr> </br> </br>

- #### best ways to deal with objects in useState:
    `by breaking them in pieces` 

    </br>

    ```JS
        const [count, setCount] = useState(4);
        const [theme, setTheme] = useState('blue');


        function decreament(){
            setCount(prevState => prevState - 1);
        }

        function increment(){
            setCount(prevState => prevState + 1);
            setTheme('red')
        }


    /* much simpler way to handle work with useState(); */
    ```

    
