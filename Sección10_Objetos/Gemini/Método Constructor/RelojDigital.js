function Reloj(h,m,s){
    this.h=h;
    this.m=m;
    this.s=s;

    this.mostrarHora=function(){
        if(this.h>=0 && this.h<=24 && this.m>=0 && this.m<=60 && this.s>=0 && this.s<=60 ){
            let horas=this.h<10 ? "0"+this.h : this.h;
            let minutos=this.m<10 ? "0"+this.m : this.m;
            let segundos=this.s<10 ? "0"+this.s : this.s;
            console.log(`${horas}:${minutos}:${segundos}`);
        }
    }
}

let miReloj=new Reloj(10,5,8);
miReloj.mostrarHora();