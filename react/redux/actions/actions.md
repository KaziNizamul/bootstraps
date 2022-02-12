**action :**

    Q: Kya hota hai ?
    A: ab koi change hota hai,
    yeh application ko yeh batata hai ki ---> koi change hua hai


    Q: dikhta kaisa h?
    basically yeh ek "information" hai,
    in JS Object form.

<br><br><br>

**Example:** create a ACTION on submitting the form

```JS
    {
        'type' : 'ADD_TO_USER',
        'payload' : {
            'name' : 'myName',
            'email': 'my@email.com'
        }
        // paylods is the `INFORMATION TO SEND`

    }

```
