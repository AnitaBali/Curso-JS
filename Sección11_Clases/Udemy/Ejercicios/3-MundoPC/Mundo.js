class DispositivoEntrada{

    constructor(tipoEntrada,marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;
    }

    set tipoEntrada(valor){
        this._tipoEntrada=valor;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set marca(valor){
        this._marca=valor;
    }

    get marca(){
        return this._marca;
    }


}

class Raton extends DispositivoEntrada{

    static contadorRatones=0;

    constructor(tipoEntrada,marca) {
        super(tipoEntrada,marca);
        this._idRaton=++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `ID ratón: ${this._idRaton} | Tipo: ${this._tipoEntrada} | Marca: ${this._marca}.`
    }
}

class Teclado extends DispositivoEntrada{

     static contadorTeclados=0;

    constructor(tipoEntrada,marca) {
        super(tipoEntrada,marca);
        this._idTeclado=++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `ID teclado: ${this._idTeclado} | Tipo: ${this._tipoEntrada} | Marca: ${this._marca}.`
    }
}

class Monitor{

    static contadorMonitores=0;

    constructor(marca,tamaño){
        this._marca=marca;
        this._tamaño=tamaño;
        this._idMonitor=++Monitor.contadorMonitores;
    }

    set marca(valor){
        this._marca=valor;
    }

    get marca(){
        return this._marca;
    }

    set tamaño(valor){
        this._tamaño=valor;
    }

    get tamaño(){
        return this._tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    toString(){
        return `ID monitor: ${this._idMonitor} | Marca: ${this._marca} | Tamaño: ${this._tamaño} pulgadas.`;
    }

}

class Computadora{

    static contadorComputadoras=0;

    constructor(nombre,monitor,raton,teclado){
        this._nombre=nombre;
        this._monitor=monitor;
        this._raton=raton;
        this._teclado=teclado;
        this._idComputadora=++Computadora.contadorComputadoras;
    }

    toString(){
        return `ID computadora: ${this._idComputadora} | Nombre: ${this._nombre} \n| Monitor: ${this._monitor} \n| Ratón: ${this._raton} \n| Teclado: ${this._teclado}`;
    }
}

class Orden{

    static contadorOrdenes=0;

    constructor() {
        this._idOrden=++Orden.contadorOrdenes;
        this._computadoras=[];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden="";
        for (let computadora of this._computadoras){
            computadorasOrden+=`\n${computadora}`;
        }

        console.log(`Orden: ${this._idOrden} | Computadoras: ${computadorasOrden} `);
    }
}


let raton1=new Raton("Inalambrica", "B-Move");
let raton2=new Raton("Bluethoh", "Samsung");

let teclado1=new Teclado("USB", "Lenovo");
let teclado2=new Teclado("Led", "Apple");

let monitor1=new Monitor("Huawei","60");
let monitor2=new Monitor("Dell","27");

let computadora1= new Computadora("Ana", monitor1,raton1,teclado1);
let computadora2= new Computadora("Borja", monitor2,raton2,teclado2);

let orden1= new Orden();
let orden2= new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);


orden1.mostrarOrden();
orden2.mostrarOrden();