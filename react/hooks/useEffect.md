 - everything inside useEffect's arrow function
 will run `every single time application renders.`
```JS
    useEffect(() => {
        console.log('calls only when application renders')
    })
```

- it takes 2nd parameter.
`its gonna be a array.`
`whatever is being passed into this array,`
`if that passed value changes, this useEffect will get triggered.` </br>
![](/bootstrapsImages/usestate5.png)


    if "resourceType" gets changed, 
    then only useEffect will get triggered. 
    
</br>

- ![](/bootstrapsImages/usestate6.png)
on changing "resourceType" from buttons below,
the useEffect will get re-render, and will make api calls accordingly.


<hr> </br> </br> </br>

- #### storing useEffect's data to useState : 

![](/bootstrapsImages/usestate8.png)

<hr> </br> </br> 

- #### handling cleanup in useEffect : 
in class-component, `componentDidUnmount` is there to handle the unsubscribe or to remove the event listeners.

here, that is being happened inside useEffect.

useEffect itself is called when component gets initialised, like `componentDidMount`.

and inside that,
we have :
```JS
    useEffect( () => {
        window.addEventListener('resize', resizeFunctionLogic);


        return () => { // this is the how we cleanup here
            window.removeEventListener('resize', resizeFunctionLogic)
        }
    })
```
