function Taller(){
    this.listaCoches=[];

    this.admitirCoche=function(modelo){
        if(modelo.length>=3){
            this.listaCoches.push(modelo);
            console.log(`Coche ${modelo} admitido correctamente.`);
        } else{
            console.log("Error, el nombre es demasiado corto.")
        }
        
    }
}

let miTaller=new Taller();
miTaller.admitirCoche("KI");
miTaller.admitirCoche("KIA");
miTaller.admitirCoche("AUDI");
miTaller.admitirCoche("Toyota");

console.table(miTaller);