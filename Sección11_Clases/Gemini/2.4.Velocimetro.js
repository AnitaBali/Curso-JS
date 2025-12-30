class Velocimetro{

    constructor(velocidadInicial){
        this.actualizar=velocidadInicial;
    }

    get actualizar(){
        return `Velocidad ${this._actualizar} km/h.`;

    }

    set actualizar(valor){
        if(valor<0){
            this._actualizar=0;
        }else if(valor>120){
            console.log("Peligro! Superas el límite.");
            this._actualizar=valor;
        } else{
            this._actualizar=valor;
        }
    }
}

let uno=new Velocimetro(200);
let dos=new Velocimetro(-1);
let tres=new Velocimetro(100);
console.log(uno.actualizar);
console.log(dos.actualizar);
console.log(tres.actualizar);