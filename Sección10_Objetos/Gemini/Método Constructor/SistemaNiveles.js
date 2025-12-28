function Usuario(nombre){
    this.nombre=nombre;
    this.puntosXP=0;
    this.nivel="Novato";

    this.ganarExperiencia=function(cantidad){
        this.puntosXP+=cantidad;
        if(this.puntosXP<100){
            this.nivel="Novato"
        }else{
            this.nivel="Veterano"
        }
        return this.puntosXP;
    };

    this.presentarse=function(){
        return "Soy " + this.nombre + ", tengo " + this.puntosXP + " y soy " + this.nivel;
    }
}

let Ana=new Usuario("Ana");
console.log(Ana.ganarExperiencia(50));
console.log(Ana.presentarse());
console.log(Ana.ganarExperiencia(70));
console.log(Ana.presentarse());
