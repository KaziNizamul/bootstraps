1. **doctype :**
> doctype batata hai browser ko, ki, kaunsa document render krna h.

> - eg : html5 ke liye : `<!doctype html>` hai
> - html4 ke liye : !DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN

> different doctype example : mathML doctype, svg doctype

> Yunn toh, browser w3 standards ke hisaab se, page render krta hai,
pr, agar kisi document mein, doctype mention nahi h toh,
browser, user jaisa likha hai,
ussi ke hisaab se, render krke de deta h
thats known as quirk mode.

2. html entites : 
> kuch characters reserved hote hai like : '<' '>' wagyra ,
> toh inko webpage mein use krne ke liye, special type se likhte h like : '&lt' for '<' , '&gt' for '>' 
> inhi ko html entities kehte hai

3. ##   📌
> IBquesn bank ka 6th quesn


4. **whats "multipart/form-data"**  ?
> ek form hai, aur uss form mein, file upload ka option hai,
> tab, uss file ko POST ke through agar bhejna hai, toh `enctype` use krna pdega 
> aur `enctype='multipart/form-data` encoding allows files to be sent through a POST.

> `application/x-www-form-urlencoded:` This is the default. When the form is sent, all names and values of the form are collected 
> phir unn pr `URL Encoding` is perform kiya jaata hai.


<br>

5. **html layout structure**  ? 
  - header : starting info of page
  - footer : copyrights etc
  
  - nav : nav links
  
  - article : set of info
  
  - aside : sidebar of page 
  
  - main : container
  - section : container 


<br> 

6. **how you'll optimise asset loading**  ? 

  - CDN hosting: distribution of servers across globe 
  - minify asset : deflate, gzip wagyra 
  - minimize server calls by writing your code efficiently
  - minify scripts and css :  JS ke liye : `closure-compiler & uglifyJS.` css : `csso & cssNano.`  html : `HTMLMinifier`
  - lazy loading of images : `loading="lazy"`

<br> 

7. **strict doctype vs transitional vs frameset ?**  [HTML4]
- strict : This DTD contains all HTML elements and attributes, but does NOT INCLUDE ❌ presentational or deprecated elements (like font). Framesets are not allowed ❌
- transitional : INCLUDE in above ✔ +  Framesets are not allowed ❌
- frameset : INCLUDE in above ✔ +  Framesets are allowed ✔ (its a tag contains one or more frame elements. It is used to specify the number of rows and columns in frameset with their pixel of spaces )
- ![](/bootstrapsImages/frameset.jpg)

<br>

8. **can we display a web page inside a web page or Is nesting of webpages possible?**
Yes, we can display a web page inside another HTML web page. HTML provides a tag `<iframe>` using which we can achieve this functionality.

- `<iframe src=”url of the web page to embed” />`
<br>


9. **charset :** 
- web browser ko explicitly bolna pdhta hai ki, 
iss character set ko use kro.

- `<meta charset='UTF-8'>`
<br>

10. **cellpadding vs cellspacing** :
- ![](/bootstrapsImages/cellpaddingvscellspacing.jpg)

11. **rowspan colspan :**
- ![](/bootstrapsImages/rowspancolspan.jpg)

12. **display :none vs visibility:hidden :**
> d for display 
> d for dom 

<br>

> none (n) for nahi
> hidden (h) for hai 

> so, display:none means - dom mein rhega + space nahi lega 
> visibility:hidden means - dom mein nahi rhega + space lega 
![](/bootstrapsImages/displaynone.jpg)


13. **How to specify the link in HTML and explain the target attribute ?**
> <a href="http://www.google.com" target="_blank">Google</a>
> _blank : opens in a new window 
> _self : opens in the same window where it was clicked
> _parent : opens in the parent frame
> _top : opens in the full body of the window


14. **link vs anchor :** 
> link : 
1. contains relationship with another doc `(eg: <link rel="stylesheet" href="styles.css">)`
2. used in head section

> anchor :
1. specifies that this is clickable link
2. used in body 

<br>

15. **How to include javascript code in HTML?**
> by using `<script>` tag

<br>

16.  **When to use scripts in the head and**
**when to use scripts in the body ?**
> head : library scripts eg: bootstrap, loadash etc 
> body : if js is rendering something in page, then place that in body 

17. ##  📌 IB Q 31.
<br>


18. **audio tag :**
``` 
<audio controls>
  <source src="horse.mp3" type="audio/ogg"> browser does not support the audio
</audio>
``` 
<br>

19. **video tag :**
```
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4"> browser does not support the video
</video>
```

<br>
<br>

20. **figure tag :**
> image ka container hai yeh basically.
`<figure>`
    .. . .`<img src="/media/cc0-images/elephant-660-480.jpg"`>
    . . . `<figcaption>An elephant at sunset</figcaption>`
`</figure>`

> **img tag :** bas image display krne ke liye.
<br>


21. **specify metadata :** 
![](/bootstrapsImages/metadata.jpg)

<br>

22. **datalist &select :**
![](/bootstrapsImages/datalist.jpg)
<br>

![](/bootstrapsImages/select.jpg)

23. **image map :**

`<img src="workplace.jpg" alt="workplace" usemap="#workmap" width="200" height="200">`

`<map name="workmap">`
  ` .   ..  <area shape="rect"` `coords="10,20,180,190" alt="computer" ......href="computer.htm">`
`</map>`

<br>

24. **semantic elem :**
> Semantic elements are those which describe the particular meaning to the browser
<br>

25. **meter element :**
```
<meter id="disk_c" value="4" min="2" max="10">2 out of 10</meter><br>
<meter id="disk_d" value="0.6">60%</meter>
```
<br>


26. **how to navigate in the same page using anchor tag ?**
![](/bootstrapsImages/navigatesamepage.jpg)
<br>

27. **drag and drop :**
> 📌 IB Q 41
<br>

28. HTML GRAPHICS -  **canvas svg :**
> used to draw graphics on a web page.
> The <canvas> element is only a container for graphics. 
> You must use JavaScript to actually draw the graphics.
![](/bootstrapsImages/canvas.jpg)
![](/bootstrapsImages/svg.jpg)
<br>

29. **microdata :**
> extract data for web crawler and search engines.
> some tags we use to mention in meta tags 
> like: itemid, itemprop, itemscope, itemtype
<br>

30. **box sizing :**
![](/bootstrapsImages/boxsizing.png)

<br>

31. **async defer :**
> ![](/bootstrapsImages/async-defer.jpg)
**normal** : jaise hi encounter hua koi script tag,
agar woh external hai : toh, download kro aur exec kro
agar internal script hai: toh exec kro.
then continue karo apna html parsing.
**async** : 
network script hua, toh, asyncly download hoyega,
aur jaise hi download hua, 
phir, EXEC karo turrant,
then continue karo apna html parsing 
**defer** : 
HTML PEHLE.
html parsing chalte rahengi, chahe kuch bhi ho jaaye,
chahe scripts download hoke available kyu hi na baithe ho..
JAB html parsing khtm hoyega,
TABHII scripts exec hoyega.
**USAGE :**
async for: external scripts
defer for: internal scripts






