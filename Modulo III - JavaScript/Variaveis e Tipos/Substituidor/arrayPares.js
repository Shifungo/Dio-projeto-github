function SubstituiPares(array){
    if (!array.length) return -1;

   for( let i = 0; i < array.length; i++){
       if(array[i] === 0){
           console.log("voce ja é zero!!")
       } else if (array[i] % 2 === 0){
        console.log(`substituindo ${array[i]} por 0...`);   
        array[i] = 0;
       }
   } 

   return array;
}

let numeros = [1, 5, 6, 7, 45, 97, 102];
console.log(SubstituiPares(numeros));