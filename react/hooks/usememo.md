

![](/bootstrapsImages/usememo1.png)

```JS
    a simple counter component.
```

</br> </br>

- introducing a odd even feature
![](/bootstrapsImages/usememo2.png)

```JS
    It will look something like this.
```

![](/bootstrapsImages/usememo3.png)

</br></br></br> </br> <hr>

![](/bootstrapsImages/usememo4.png)

```markdown
   now what will happen is,
   on clicking the first button,
   program will take some time, due to this huge calc.

   but on clicking 2nd button also,
   program will take some time, 

   REASON : 
        even if isEven is only dependent on "counterOne",
        IF i am clicking 2nd button, that will change the state of 
        "counterTwo".

        CONCEPT : 
            entire component mein kisi ka bhi state agar change hoyega, ya props change hoyega
            toh react, re-render krega entire component.

            so, re-render ke time, isEven phir se trigger hota hai.
            isiliye 2nd button click krne pe bhi
            execution slow hota hai.
```

```markdown
    now, to solve this,
    we can use "useMemo"

```

![](/bootstrapsImages/usememo5.png)

```JS
    1. arrow function hoyega              // line 15
    2. return krna hota hai yaha          // line 18
    3. dependencies ko array ke 
       format mein pass krna hota hai     // line 19

       jab bhi yeh dependency change hoga,
       tabhi yeh re-calc hoyega,
       warna purana calc ho cached rhega.
    
```



<hr><br><br><br><br><br>

- One more use-case is there.
- while one of the state of component will get changed,
if there is some object/ array is there,
that use to get again re-evaluated, coz of "referencial equality".
i.e on re-rendering the address of that object use to get change
and due to it, that object use to again get evaluated.
so, to stop it from getting happen,
we can use "useMemo" here as well.












