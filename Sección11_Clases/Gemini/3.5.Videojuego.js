class Personaje{

    constructor(nombre,nivelInicial) {
        this._nombre=nombre;
        this.nivel=nivelInicial;
    }

    set nivel(valor){
        if(valor<1){
            this._nivel=1;
        }else{
            this._nivel=valor;
        }
    }

    get nivel(){
        return this._nivel;
    }

    moverse(){
        return `${this._nombre} esta caminando (Nivel ${this.nivel})`;
    }
}

class Mago extends Personaje{
    
    constructor(nombre,nivelInicial,hechizo){
        super(nombre,nivelInicial);
        this._hechizo=hechizo;
    }

    lanzarHechizo(){
        return super.moverse() + " y lanza hechizo: " +this._hechizo;
    }
}



let uno=new Mago("Mago",-10,"Placaje");
console.log(uno.nivel);
console.log(uno.lanzarHechizo());