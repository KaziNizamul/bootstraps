- #### how to use useRef stop re-rendering components while some variable updates.

- ![](/bootstrapsImages/useref1.png)
    -  `name` ka useState hai.
    -   `renderCount` ka bhi useState hai.
    -   AB HOGA YEH KI,
        program chalte hi, 
        `name` ka state empty set ho jyega.
        `renderCount` ka state empty set ho jyega.

        </br>
        phir, aayega `useEffect` ka baari.

        `useEffect` run karne se,
        `jitne baar bhi application render hota hai,`
        `utne baar useEffect call hota hai.` 
        </br>


        so, useEffect pehle baar call hoyega,
        phir, `prevRenderCount + 1` hone se, phirse component re-render hoyega.
        Phir useEffect call hoyega kyunki : `everything inside useEffect's arrow function will run every single time application renders.`

        </br>
        so yeh endless loop mein chala jayega.


<hr>

**Solution :** useRef

`useRef` ek object return krta hai, i.e  { current : # }
```JS
    eg: const renderCount = useRef(0)
    so, { current : 0 } 
``` 

![](/bootstrapsImages/useref2.png)

IT WILL UPDATE THE `renderCount`, but WONT RE-RENDER THE COMPONENT.

OR,
IT IS VERY SIMILAR TO useState,
BUT WONT CAUSE THE STATE TO RE-RENDER, AS VARIABLE UPDATES.


<hr></br></br></br>

- #### how to use useRef to target html elements
![](/bootstrapsImages/useref3.png)


<hr></br></br></br>

- #### how to use useRef to store prevValue of a state + not causing extra re-render while storing that prevValue

![](/bootstrapsImages/useref4.png)
