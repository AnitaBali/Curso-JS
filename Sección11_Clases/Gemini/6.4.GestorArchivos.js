class Archivo{

    constructor(nombre){
        if(new.target===Archivo){
            throw new Error("No puedes crear objeto abstracto.");
        }
        this._nombre=nombre;
    }

    guardar(){
        throw new Error("Debe implementarse el método.");
    }

}

class PDF extends Archivo{

    guardar(){
        console.log("Guardando el archivo " + this._nombre + " como PDF...");
    }
}

class Word extends Archivo{

    guardar(){
        console.log("Guardando el archivo " + this._nombre + " como Word...");
    }
}

let misArchivos=[
    new PDF("Coco1234"),
    new Word("Dolly5678")
];

misArchivos.forEach(function(archivo){
    archivo.guardar();
})