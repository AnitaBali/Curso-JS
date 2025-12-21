//Recorrer los números del 1 al 30
//Si número es múltiplo de 3, imprime Fizz
//Si es múltiplo de 5, imprime "Buzz".
//Si es múltiplo de ambos (3 y 5), imprime "FizzBuzz".
//Si no es ninguno, imprime el número.

for(let i=1; i<=30; i++){
    if(i%3===0 && i%5===0){
        console.log(`${i}: FizzBuzz`);
    } 
    else if(i%3===0){
        console.log(`${i}: Fizz`);
    } 
    else if(i%5===0){
        console.log(`${i}: Buzz`);
    }
    else{
        console.log(i);
    } 
}
