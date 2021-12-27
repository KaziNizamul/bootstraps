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

