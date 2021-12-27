<center> <strong>1. Initial Step </strong> : Importing BrowserRouter </center>

```javascript
Import {BrowserRouter as Router } from 'react-router-dom'

<Router>              // <-------------
    <HomePage />
<Router>
```
---
<center> <strong> 2. Routes  </strong> </center>

every route that we gonna write, should be wrapped around `routes`

```JS
<Router> 
    <Routes>          // <-------------
       <Route path="/" element={<HomePage/>} /> 
    </Routes>
<Router>
```
---
<center> <strong> 3. Route  </strong> </center>

```JS
<Router> 
    <Routes>         
        <Route path="/" element={<HomePage/>} />  // <----------
    </Routes>
<Router>
```

--- 
<center> <strong> 4. Navigate  </strong> </center>

**bad practice** :
```JS
<Router> 
    <Routes>         
        <Route path="/" element={<HomePage />} />
        <Route path="/myapps" element={<LearnPage />} />
        <Route path="/learn" element={<LearnPage />} />
    </Routes>
<Router>
```
>
yaha  `/myapps` likhne "pe bhi LearnPage pe jyega
"`/learn`" pe bhi LearnPage pe jyega.
Yaha galat kuch nahi, pr yeh sahi tareeka nahi hai.
<br><br><br>

**correct way:**
```JS
<Router> 
    <Routes>         
        <Route path="/" element={<HomePage />} />
        <Route path="/myapps" element={Navigate to="/learn"} />
        <Route path="/learn" element={<LearnPage />} />
    </Routes>
<Router>
```

NOTE: 
>
    <Navigate to="/learn" /> se yeh ek tarah ka overlay banaata hai.
    say it like: on top of /myapps, /learn will lay-overr

__correct way is__ : <Route path="/myapps" element={Navigate **replace** to="/learn"} />


---
<br>

<center> <strong> 5. Link  </strong> </center>

```JS
function Learn() {
  return (
    <div>
      <h1> Learn Page! </h1>
      <Link to="/learn/courses"> courses </Link>
      <Link to="/learn/bundle"> bundle </Link>
    </div>
  );
}
```
**NOTE :** Tricky Question : why not to use anchor tag inplace of `<Link/>` ? 
**Ans :**  anchor tag will make the page reload. Link wont.

---
<br>

<center> <strong> 6. Nested Routing </strong>  </center>
<br>

_**Requirement :**_ 
learnPage ke andar reh ke, `/learn/courses` aur `/learn/bundles` jaana hai.

_**approach :**_ 
```JS
    <Route path="/myapps" element={<Navigate replace to="/learn" />} />
    <Route path="/learn" element={<Learn />}>  // <=--------
        <Route path="courses" element={<Courses />} />
        <Route path="bundles" element={<Bundles />} />
    </Route>
```

```JS
function Learn() {
  return (
    <div>
      <h1> Learn Page!</h1>

      <Link to="/learn/courses"> courses </Link>
      <Link to="/learn/bundles"> bundle </Link>
      
      <Outlet /> // <=--------
    </div>
  );
}
```

```JS
function Courses() {
  return (
    <div>
      <h1> Courses Lists </h1>
      <p> list of courses </p>
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1> bundle Lists </h1>
      <p> list of bundles </p>
    </div>
  );
}
```
![](/bootstrapsImages/nestedRoute.png)

---

<br>
<center> <strong> 7. useParams() : how to get urls params & put it in page </strong>  </center>

```JS
    <Route path="courses" element={<Courses />}>
        <Route path=":courseid" element={<CourseID/>}/>
    </Route>
```
```JS
function Courses() {
  return (
    <div>
      <h1> Courses Lists </h1>
      <p> list of courses </p>
      <Outlet />  // <=----------
    </div>
  );
}

function CourseID() {
  const {courseid} = useParams();  // <=---------- this has to be in object format
  // upar route mein jo colon ke saath naam diya hai, wahi yaha bhi
  
  return (
    <div>
      <p> courseId : {courseid} </p> 
    </div>
  );
}

```
![](/bootstrapsImages/useParam.png)


---
<br>

