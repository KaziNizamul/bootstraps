<center><strong> 0. NavLink </strong></center>

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

<center><strong> 0. useNavigate & useLocation </strong></center>

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
<center><strong> 0. pass data to another component using `Link` </strong></center>

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
