```
var n = 2;

function square (num) {
    var ans = num * num ;
    return ans;
}

var sq2 = square(n);

```
 <hr><br><br>
###### First Phase : MEMORY CREATION PHASE

     -----------------------------------
    | Memory         |             Code |
    -----------------------------------
    | n : undefined  |                  |  // for variables, undefined is allocated there.
    |                |                  | 
    |                |                  |
    | square : {...} |                  |  // for functions, whole function code, get placed in {...}
    |                |                  |   
    |                |                  |
    | sq2: undefined |                  | 
    |                |                  |   
    |                |                  |          
    -------------------------------------

 <hr><br><br>
###### Second Phase : CODE EXECUTION PHASE
 
    In this phase , it assign the scanned values, to respective variables

    ---------------------------------------------
    | Memory         |             Code          |
    ---------------------------------------------
    | n : 2          |                           |  
    |                |                           | 
    |                |     ----------------------            
    | square : {...} |    |memory         | code |  
    |                |     ----------------------
    |                |    |               |      |   
    |                |    | num:undefined |      |
    |                |    | ans:undefined |      |
    |                |     ----------------------|
    | sq2: undefined |                           | 
    |                |                           |   
    |                |                           |          
    ---------------------------------------------


    ---------------------------------------------
    | Memory         |             Code          |
    ---------------------------------------------
    | n : 2          |                           |  
    |                |                           | 
    |                |     ----------------------            
    | square : {...} |    |memory         | code |  
    |                |     ----------------------
    |                |    |               |      |   
    |                |    | num:2         |num*num
    |                |    |               |      |
    |                |    | ans:undefined |      |
    |                |     ----------------------|
    | sq2: undefined |                           | 
    |                |                           |   
    |                |                           |         
    ---------------------------------------------


    ---------------------------------------------
    | Memory         |             Code          |
    ---------------------------------------------
    | n : 2          |                           |  
    |                |                           | 
    |                |     ----------------------            
    | square : {...} |    |memory         | code |  
    |                |     ----------------------
    |                |    |               |      |   
    |                |    | num:2         |num*num
    |                |    |               |      |
    |                |    | ans:4         |return|
    |                |     ----------------------|
    | sq2: undefined |                           | 
    |                |                           |   
    |                |                           |           
    ---------------------------------------------


     ---------------------------------------------
    | Memory         |             Code          |
    ---------------------------------------------
    | n : 2          |                           |  
    |                |                           | 
    |                |     ----------------------            
    | square : {...} |    |memory         | code |  
    |                |     ----------------------
    |                |    |               |      |   
    |                |    | num:2         |num*num
    |                |    |               |      |
    |                |    | ans:4         |return|
    |                |     ----------------------|
    | sq2: 4         |                           | 
    |                |                           |   
    |                |                           |          
    ---------------------------------------------

     
     
<hr><br><br>

 ##### CALL STACK :

        |     |
        |     | 
        | EC1 |  inner execution context got pushed due to square(n) function & this will get pop after its execution is done
        | GEC |  global execution context
        -------

        after execution of any excution stack is over, that execution context got DELETED (poped off)