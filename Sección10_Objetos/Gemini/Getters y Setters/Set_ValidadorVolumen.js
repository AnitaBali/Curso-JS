let reproductor={
    volumen:50,

    set ajustarVolumen(nivel){
       if (nivel<0){
            this.volumen=0;
       } else if(nivel<=100){
            this.volumen=nivel;
       }else{
            this.volumen=100;
       }
    }
}

reproductor.ajustarVolumen=90;
console.log(reproductor.volumen);
reproductor.ajustarVolumen=0;
console.log(reproductor.volumen);
reproductor.ajustarVolumen=1;
console.log(reproductor.volumen);
reproductor.ajustarVolumen=-5;
console.log(reproductor.volumen);
reproductor.ajustarVolumen=100;
console.log(reproductor.volumen);
reproductor.ajustarVolumen=200;
console.log(reproductor.volumen);