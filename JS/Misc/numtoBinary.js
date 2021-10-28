const arr = [1,2,3]

function binary(x){
  return x.toString(2)  //  change this for conversion (2-binary) (8-octal) (10-decimal) (16-hexa) 
}


console.log(  
      arr.map(binary)  // ['1', '10','11']
)
