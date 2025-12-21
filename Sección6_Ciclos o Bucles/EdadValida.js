let edad=0;

do{
    edad=Math.floor(Math.random()*26)-5;
    /*
    Math.random() siempre genera un número decimal entre 0 (incluido) y 1 (sin llegar nunca al 1). 
    Ejemplo: 0.523...
    Para conseguir un rango personalizado, seguimos tres pasos:
    - Si quieres números que abarquen desde el -5 hasta el 20, tienes que contar cuántos números hay en medio.
      Del -5 al 0 hay 5 números.
      Del 0 al 20 hay 20 números.
      Total: 25 números de diferencia.
      (Usamos 26 para que el 20 también pueda salir, ya que el 1 nunca se alcanza).
      $$Math.floor(Math.random() * \text{Cantidad de números}) + \text{Número de inicio}$$
    **/
    console.log(`Edad introducida: ${edad}`);

} while(edad<=0);