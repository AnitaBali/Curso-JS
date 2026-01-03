class Figura{

    constructor() {
        if(new.target===Figura){
            throw new Error("No puedes crear una figura abstracta.");
        }
    }

}

class Cuadrado extends Figura{

}

//let figura1=new Figura();
let cuadrado1=new Cuadrado();