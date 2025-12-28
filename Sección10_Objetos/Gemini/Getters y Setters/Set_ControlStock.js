let tienda={
    stock:10,

    set actualizarStock(cantidad){
        if(cantidad>0){
            this.stock=this.stock+cantidad;
        }else{
            console.log("Valor no válido.")
        }
    }
}

tienda.actualizarStock=15;
console.log(tienda.stock);
tienda.actualizarStock=3;
console.log(tienda.stock);
tienda.actualizarStock=0;
console.log(tienda.stock);
tienda.actualizarStock=-1;
console.log(tienda.stock);