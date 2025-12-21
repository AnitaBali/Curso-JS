//Ejercicio de realizar la suma de los primeros 5 numeros

//Ciclo for
sumaFor=0;
for(let i=0; i<=5;i++)
{
    sumaFor+=i;
}

console.log(`La suma total es de ${sumaFor}`);

//Ciclo while
numero=0;
sumaWhile=0;

while(numero<=5){
    sumaWhile+=numero;
    numero++;
}

console.log(`La suma total es de ${sumaWhile}`);

//Ciclo DoWhile
numero2=0;
sumaDoWhile=0;

do{
    sumaDoWhile+=numero2;
    numero2++;
}while(numero2<=5);

console.log(`La suma total es de ${sumaDoWhile}`);
