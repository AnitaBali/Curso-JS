let precios=[100,200,"error",300,-50,400];
let sumaTotal=0;

precios.forEach(function(precio){

    try{
        if(typeof precio !== 'number'){
           throw new Error("Error: no es un número.");
        } 
        
        if(precio<0){
           throw new Error("Error: es negativo.");
        } 

        sumaTotal+=precio;
            
    } catch(error){
        console.log(error.message);
    }
    
});

console.log("----------------");
console.log("Suma Total Final: " +sumaTotal);