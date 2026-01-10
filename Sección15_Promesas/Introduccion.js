/*
💍 ¿Qué es una Promesa?
Imagina que vas a una tienda a comprar un móvil que no tienen en stock.

El dependiente te da un recibo (la Promesa).

Ese recibo es un compromiso: "Prometo que te daré el móvil cuando llegue".

Mientras tanto, tú te vas a casa y sigues con tu vida (el programa no se detiene).

En el futuro, pueden pasar dos cosas:

      Éxito: Llega el móvil y lo recibes.
      Error: La fábrica ha cerrado y no hay móvil.

🛠️ Los 3 Estados de una Promesa
Una promesa siempre está en uno de estos tres estados:

----> Pending (Pendiente): Es el estado inicial. La tarea aún no ha terminado.
----> Fulfilled (Resuelta): La tarea terminó con éxito (tenemos los datos).
----> Rejected (Rechazada): La tarea falló (hubo un error).

📝 Sintaxis: ¿Cómo se crean?
Para crear una promesa usamos new Promise. Esta recibe un callback con dos funciones especiales: 
resolve (si todo va bien) y reject (si algo falla).

const miPromesa = new Promise((resolve, reject) => {
    let exito = true;

    if (exito) {
        resolve("¡Operación completada!");
    } else {
        reject("Hubo un error...");
    }
});

🎣 ¿Cómo se usan? (Consumir la promesa)
Aquí viene lo más importante. Para obtener el resultado, usamos dos métodos:

.then(): Se ejecuta cuando la promesa se resuelve con éxito.
.catch(): Se ejecuta si la promesa es rechazada.

miPromesa
    .then(resultado => {
        console.log("Éxito: " + resultado);
    })
    .catch(error => {
        console.log("Error: " + error);
    });
    
❓ ¿Cuándo se usan?
Se usan para operaciones asíncronas, es decir, cosas que no sabemos cuánto van a tardar:

-----> Peticiones a una API/Servidor (traer datos de una web).
-----> Leer archivos de un disco duro.
-----> Consultas a Bases de Datos.
-----> Temporizadores largos.


🆚 Callback vs Promesa (Diferencia clave)
Callback: Tú le pasas una función a otra para que la llame cuando quiera. 
          Tú pierdes el control.
Promesa: La función te devuelve un objeto (la promesa). Tú tienes el objeto y  
         decides qué hacer cuando se cumpla usando .then(). Es mucho más ordenado.

**/

const pedirPizza = () => {
    return new Promise((resolve, reject) => {
        let hayIngredientes = true;
        
        if (hayIngredientes) {
            resolve("🍕 Pizza lista");
        } else {
            reject("❌ No quedan ingredientes");
        }
    });
};

// Intenta adivinar qué pasará aquí:
pedirPizza()
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));


const comprobarNota = (nota)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            if(nota>=5){
                resolve("Aprobado");
            }else{
                reject("Suspenso")
            }
        },2000);
    });  
};
        

comprobarNota(4)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))