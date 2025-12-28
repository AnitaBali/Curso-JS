let mensaje={
    emisor:"Ana",
    receptor:"Borja",
    contenido:"Te quiero"
};

let modelo=JSON.stringify(mensaje,null,2);
console.log(modelo);