#example1 {
  box-sizing: content-box;  
  width: 300px;
  height: 100px;
  padding: 30px;  
  border: 10px solid blue;
}

- this will take space like : 300 (content ka) + 10+10 (border) + 30+30 (padding) = 380px
   even if we gave WIDTH of 300px, it will take 380px


<br><hr>

#example2 {
  box-sizing: border-box;
  width: 300px;
  height: 100px;
  padding: 30px;  
  border: 10px solid blue;
}

- this will only take 300 px, by self adjusting, no matter what 