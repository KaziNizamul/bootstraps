<h5 align="center"> 1. Variables </h5>

```css
    $primary-color : #gray;


    body {
        background : $primary-color;
    }
```
<hr></br>
<h5 align="center"> 2. Maps </h5>

```css
    $font-weights : ("regular" : 400, "medium" : 500, "bold" : 700)


    body {
        background : map-get($font-weights, bold);
    }
```

<hr></br>
<h5 align="center"> 3. Functions </h5>

```css
    $font-weights : ("regular" : 400, "medium" : 500, "bold" : 700)


    @function weight($name){
        @return map-get($font-weights, $name);
    }

    body {
        font-weight: weight(bold);
    }
```
<hr></br>
<h5 align="center"> 4. Mixin </h5>

1. normal : 
```css
    @mixin flexCenter{
        display : flex;
        justify-content: center;
        align-items : center;
    }

    body {
        @include flexCenter;
    }
```
<br>

2. as function : 
```css
    @mixin flexCenter($direction){
        display : flex;
        justify-content: center;
        align-items : center;
        flex-direction : $direction; <------
    }

    body {
        @include flexCenter(column);
    }
```


<hr></br>
<h5 align="center"> 5. Extends </h5>
suppose 2 paragraph is there. <br>
You want to extend para1's property to para2</br>
+ want to make some additional changes in para2 <br><br>


```css
    .para1 {
        display : flex;
        justify-content: center;
        align-items: center;
    }

    .para2{
        @extends .para1;
        flex-direction: column;
    }
```


