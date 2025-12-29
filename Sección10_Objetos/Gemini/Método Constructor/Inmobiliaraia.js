function Casa(direccion,habitaciones,precio){
    this.direccion=direccion;
    this.habitaciones=habitaciones;
    this.precio=precio;
    this.estado="disponible";

    this.vender=function(){
        this.estado="vendida";
    }
}

let venta1=new Casa("Calle del Sueño", 4, 100000);
let venta2=new Casa("Calle de los Amores", 2, 30000);
venta1.vender();
console.log(venta1.estado);