function Jugador(nombre,clase,vida){
    this.nombre=nombre;
    this.clase=clase;
    this.vida=vida;

    this.recibirDaño=function(puntos){
        this.vida-=puntos;
        if(this.vida<=0){
            this.vida=0;
            console.log("Has muerto");
        } else{
            console.log(`${this.nombre} ha recibido ${puntos} de daño. Vidas restantes: ${this.vida} `);
        }
    }
}

let Arturo=new Jugador("Arturo","guerero",100);
Arturo.recibirDaño(20);
Arturo.recibirDaño(20);
Arturo.recibirDaño(20);
Arturo.recibirDaño(20);
Arturo.recibirDaño(20);
console.log(Arturo.vida);