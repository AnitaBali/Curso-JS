class Sueldo{

    constructor(salario){
        this.salario=salario;
    }

    get salario(){
        return `${this._salario} euros.`;
    }

    set salario(salario){
        if (salario<1000){
            console.log("Sueldo por debajo del mínimo.");
            this._salario=0;
        } else{
            this._salario=salario;
        }
    }
}

let salario1=new Sueldo(500);
let salario2=new Sueldo(2000);

console.log(salario1.salario);
console.log(salario2.salario);