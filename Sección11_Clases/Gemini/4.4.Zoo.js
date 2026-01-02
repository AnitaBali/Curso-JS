class Animal{
    constructor(nombre) {
        this._nombre=nombre;
    }

    comer(){
        return "Este animal se alimenta.";
    }
}

class Leon extends Animal{
    constructor(nombre){
        super(nombre);
    }

    comer(){
        return "El león caza y come carne."
    }
}

class Elefante extends Animal{
    constructor(nombre){
        super(nombre);
    }

    comer(){
        return "El elefante busca hierba y ramas."
    }
}

let miLista=[
    new Animal("Coco"),
    new Leon("Simba"),
    new Elefante("Dumbo")
];

miLista.forEach(function(animal){
    console.log(`Nombre: ${animal._nombre} | Dieta: ${animal.comer()}`);
});
