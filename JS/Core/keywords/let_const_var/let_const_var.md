####let :  

  isko alag se `memory space` allocate hota h(Script).
  niche diagram h.


---
---

####const :

1. ___scope:___
    same like `let`
    isko bhi alag se`memory space` allocate hota h.

![](/bootstrapsImages/let_const_var.jpg)

    a aur b dikh rha upar ?
    aalag se hi unko, memory space mila hua h.

    jabki var wale ko
    niche global mein, memory space mila hua h.
    
    
---

2. ___temporal dead zone :___

jab `let/const wala variable`
memory creation phase mein hi hai, aur 
usko special keyword `undefined` mila hua h.

aur issi beech usko access kiya jyega,
This `isse beeech` (phase between undefined-> value allocation) ko 
temporal dead zone kehte hai.

phir 
` ReferenceError: Cannot access 'a' before initialization`
ayega.

---

3. ___core concept of const :___
- variable ke liye : 
> const a = 10;
> a = 20;
> TypeError: const varible ko nai badal skte.

- array ke liye : 
> const arr = [1,2,3];
> arr.push(4);
> console.log(arr)

    this wont throw any error !!! 😯


- object ke liye : 
> const obj = {a:1, b:2};
> obj.a = 10;
> console.log(obj);

    this wont throw any error !!!
    why ????????????????????????? 😥

> <b>answer</b>  : <i>suppose it as, human.
> either u r wearing jacket,or not wearing it,
> u r 'you' only.
> like that, 
> chahe, koi property object ke andar change ho jaaye,
> ya, koi proprty naya add ho jaaye,
> at the end, yeh object, wahi object rhega,
> yeh object ko kuch memory space mila hoya rhega,
> yeh ab bhi, wahi address pe rhega.
> isliye array aur object ke case mein, yeh 
> typeError nahi dikha rha hota hai.</i>

---
---

####var:

  isko global space mein, `memory space` allocate hota h.
