class Vehiculo{
    static conteo=0;

    constructor(){
        Vehiculo.conteo++;
    }

    static mostratTotal(){
        return Vehiculo.conteo;
    }
}

let v1=new Vehiculo();
let v2=new Vehiculo();
let v3=new Vehiculo();
let v4=new Vehiculo();

console.log(Vehiculo.mostratTotal());