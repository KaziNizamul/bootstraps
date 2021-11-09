```
<!----------------------------- html  --------------------->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style> 
        div{
            min-width: 100px;
            min-height: 100px;
            padding: 50px;
            border: 1px solid black;
        }
    </style>
</head>
<body>

    <div id="grandparent">
        <div id="parent">
            <div id="child"> </div>
        </div>
    </div>
    
    <script src="./jS.js">  </script>

</body>
</html>

<hr>

<!------------------------------- js  ----------------------->
document.querySelector('#grandparent').addEventListener('click', function callback() {
    console.log('*grandparent clicked');
// }, false) // bubbling
}, true) // trickling
    
    
document.querySelector('#parent').addEventListener('click', function callback() {
    console.log('*parent clicked');
// }, false) // bubbling
}, true) // trickling
    
    
document.querySelector('#child').addEventListener('click', function callback() {
    console.log('*child clicked');
// }, false) // bubbling
}, true) // trickling
```

- bubbling : 
> it bubbles up to the uppermost-parent part.

- trickling :
> it trickles down, from uppermost part, to lowermost-parent part.


#### event.target : 
> event.target : kaha click kiya gaya hai.
> event.currentTarget : uppermost part.

<br>

#### event stopPropagation :
> 
```
<div class="parent" (onClick)="console.log('parent')">
    <button class="child" (onClick)="buttonClick(event)"></button>
</div>
<script>
    function buttonClick(event) {
        event.stopPropagation();
        console.log('1st click triggered');
    }

    function buttonClick(event) {
        console.log('2nd click triggered');
    }
</script>

OUTPUT : 
    1st click triggered
    2nd click triggered
```

<br>
<hr>


#### event stopImmediatePropagation :
> 
```
<div class="parent" (onClick)="console.log('parent')">
    <button class="child" (onClick)="buttonClick(event)"></button>
</div>
<script>
    function buttonClick(event) {
        event.stopImmediatePropagation();
        console.log('1st click triggered');
    }

    function buttonClick(event) {
        console.log('2nd click triggered');
    }
</script>

OUTPUT : 
    1st click triggered
```

<hr> <br><br>

**CONCEPT :**

## ----------TRICKLING > BUBBLING ---------------
trickling pehle. bubbling baad mein.
