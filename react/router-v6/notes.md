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

<center><strong> 8. NavLink </strong></center>

gives added functionality over link 
eg : isActive (should be destructured in object)

```JS
    
      <NavLink 
        style = {
            ({isActive}) => {
            return { backgroundColor : isActive ? 'pink' : 'yellow' }
            }
        }
        to={`/learn/courses/${randomCourse}`} >
            
            {randomCourse} 

      </NavLink>

```

---

<center><strong> 9. useNavigate & useLocation </strong></center>

```JS
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />

      <Route path="learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseid" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>

      <Route path="/dashboard" element={<DashBoard />} /> // <=-------------- yeh naya component pe jaana hai ( data iss page tak le jaana hai)
    </Routes>

```

```JS
function CourseId() {
  const navigate = useNavigate();  // yeh just lagaana hai

  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard", { state: 399 }); // to which component.
          // what data you want to send
          // "state" ko aise object mein likhne ka hai
          // "state" hi likhna h idhar aur kuch naam nahi chalega
        }}
      >
        check price
      </button>
    </div>
  );
}

```

```JS
function DashBoard() {
  const location = useLocation(); // ispe data ayega.
  // thats what the use of "useLocation"

  return (
    <div>
      <h5>Price of the course : {location.state}</h5> // bas..normally extract krke display krwa do.
    </div>
  );
}

```

--- 
<br>
<center><strong> 10. pass data to another component using `Link` </strong></center>

```JS
  <Link to="/dashboard" state={'Django'}> pass from here </Link>
```


```JS
function DashBoard() {
  const location = useLocation(); // <=-------------

  return (
    <div>
      <h5>Price of the course : {location.state}</h5>  // <=------
    </div>
  );
}

```


