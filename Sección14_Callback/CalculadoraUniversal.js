//Objetivo: Entender cómo una función puede cambiar su comportamiento totalmente 
//dependiendo del callback que reciba.

const sumar= (a,b) => a+b;
const multiplicar= (a,b) => a*b;
const exponente= (a,b) => Math.pow(a,b);

const operar= (n1,n2,operacion) => {
    const resultado=operacion(n1,n2);
    console.log("Resultado: " +resultado);

}



(operar(5,3,sumar));
(operar(5,3,multiplicar));
(operar(5,3,exponente));
