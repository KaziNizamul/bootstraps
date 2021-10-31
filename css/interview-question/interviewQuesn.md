1. **How to determine if the browser supports a certain feature ?**
> @supports (display: grid) {
	.......div {
    .............display: grid;
	.......}
}

<br>

2. **advantages of using translate() instead of absolute position ?**
> absolute - makes browser repaint and reflow
> translate - doesnt do that

<br>

3. **What is specificity ?** 
> inline > ID > class 
> universal = zero specificity

<br>

4. **What do CSS Custom properties variables mean ?**
> :root {
........   --main-bg-color: brown
}
.one {
........color: white;
........background-color: var (--main-bg-color)
}

<br>

5. **How do I restore the default value of a property ?**
> the keyword 'initial'

<br>

6. **What does the :root means ?**
> allows you to target the highest-level “parent” element in the DOM,