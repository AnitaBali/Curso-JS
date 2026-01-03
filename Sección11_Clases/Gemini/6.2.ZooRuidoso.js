class Animal{

    constructor(){
        if(new.target===Animal){
            throw new Error("No puedes crear un animal.");
        }

    }

     hacerSonido(){
            throw new Error("...");
        }
}

class Perro extends Animal{

    hacerSonido(){
        console.log("Guau!");
    }
}

//let uno=new Animal();
let dos=new Perro();
dos.hacerSonido();