### Scope Chaining :

<br>

![](/bootstrapsImages/scopeChaining.png)

```
function a(){
    var b = 10;
    function c() {
        console.log(b);
    }
}

a();

```

- _Step 1:_- at beginning of everything, a global execution context will be generated.
  and a( ) will be there, with its full code (i.e a {...})
  <br>
- _Step 2:_- at phase 2 of it, it will execute the 'function a( )' and , a new execution context will be generated FOR A( ).
  > Along with a reference to its parent(yellow color)
  > This is called "reference to lexical env of its parent, which is -> global exec contexts"

<br>

- _Step 3:_- inside this, "b" is there, and, 'function c' is there.
  so accordingly, memory allocation will be done for these both.

<br>

- _Step 4:_- at Phase 2, 'function c' will get executed and have new execution contexts now!
  > Along with a reference to its parent(yellow color)
  > This is called "reference to lexical env of its parent, which is -> a( )"

> Note : global exec context will also has an reference to its parent, which is -> null

<br> <br>
Now!!

if console.log(b) is done inside function c(), it will follow these:

1. find b in local scope of function c( ).
   if found, ok, else
2. find it, in its, lexical env of its parent, which is a( ). so find it inside a ( )
   if found, ok, else
3. find it, in its, lexical env of its parent, which is global exec context.
   if found, ok, else -> return null
4. IMPORTANT : if at last null is encountered for 'global execution context" `ReferenceError: b is not defined` will come.
