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

3. ##  
> IBquesn bank ka 6th quesn


4. whats "multipart/form-data"  ?
> ek form hai, aur uss form mein, file upload ka option hai,
> tab, uss file ko POST ke through agar bhejna hai, toh `enctype` use krna pdega 
> aur `enctype='multipart/form-data` encoding allows files to be sent through a POST.

> `application/x-www-form-urlencoded:` This is the default. When the form is sent, all names and values of the form are collected 
> phir unn pr `URL Encoding` is perform kiya jaata hai.


<br>

5. html layout structure  ? 
  - header : starting info of page
  - footer : copyrights etc
  
  - nav : nav links
  
  - article : set of info
  
  - aside : sidebar of page 
  
  - main : container
  - section : container 


<br> 

6. how you'll optimise asset loading  ? 

  - CDN hosting: distribution of servers across globe 
  - minify asset : deflate, gzip wagyra 
  - minimize server calls by writing your code efficiently
  - minify scripts and css :  JS ke liye : `closure-compiler & uglifyJS.` css : `csso & cssNano.`  html : `HTMLMinifier`
  - lazy loading of images 

<br> 

7. strict doctype vs transitional vs frameset ?  [HTML4]
- strict : This DTD contains all HTML elements and attributes, but does NOT INCLUDE ❌ presentational or deprecated elements (like font). Framesets are not allowed ❌
- transitional : INCLUDE in above ✔ +  Framesets are not allowed ❌
- frameset : INCLUDE in above ✔ +  Framesets are allowed ✔ (its a tag contains one or more frame elements. It is used to specify the number of rows and columns in frameset with their pixel of spaces )
