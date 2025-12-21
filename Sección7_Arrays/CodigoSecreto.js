let codigoSecreto=5555;
let intento=0;

do{
    intento=Math.floor(Math.random()*11)+5550;
    console.log(`Probando con: ${intento}...`)

}while(intento!=codigoSecreto);

console.log("Sistema desbloqueado!");