##### fetch : get 

```JavaScript

  fetch('https://jsonplaceholder.typicode.com/users')
  .then( res => res.json())
  .catch( res => setData(res))
```
<hr> 

##### fetch : post

```JavaScript
  fetch('https://jsonplaceholder.typicode.com/users'), {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: myName,
      password: myPassword
    })
  })
  .then( res => res.json())
  .catch( res => setData(res))
```


 <hr> <br> <br>

##### Axios : get 
 ```JS
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      console.log(res);
      this.setData(res);
    })
    .catch(err => console.log(err));
 ```

##### Axios : post 
 ```JS
  axios.post("https://reqres.in/api/login", {
      email: email,
      password: password
    })
  .then(res => console.log(res))
  .catch(res => console.log(res))

 ```