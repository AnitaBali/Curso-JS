let sistemaEncendido=true;
let bateria=100;

while(sistemaEncendido==true){
    bateria-=20;
    console.log(bateria);
    if(bateria<=0){
        sistemaEncendido=false;
    }
}