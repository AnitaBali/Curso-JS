//Ejercicio 1

const miAccion = () => console.log("Click detectado");

const boton= (cb) => {
    console.log("Boton presionado");
    cb();
};


boton(miAccion);

//Ejercicio 2

const luzRoja= () => console.log("Peligro");

const luzVerde= () => console.log("Todo OK");

const alarma= (instruccion) =>{
    console.log("Escanenado sistema...");
    instruccion();
}

alarma(luzRoja);
alarma(luzVerde);