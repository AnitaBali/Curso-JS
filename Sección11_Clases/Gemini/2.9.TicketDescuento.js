class TicketDescuento{

    constructor(codigoTicket,descuentoTicket) {
        this.codigo=codigoTicket;
        this.porcentaje=descuentoTicket;
    }

    set codigo(valor){
        if(valor.startsWith("D")){
            this._codigo=valor;
        } else{
            console.log("INVALIDO");
            this._codigo="INVÁLIDO";
        }
    }

    set porcentaje(valor){
        if(valor>=0 && valor<=50){
            this._porcentaje=valor;
        }else if(valor>50){
            this._porcentaje=50;
            console.log("AVISO, NO PUEDES DESCONTAR MÁS DEL 50%");
        }else{
            this._porcentaje=0;
        }
    }

    get info(){
        return `Cupón ${this._codigo.toUpperCase()} con ${this._porcentaje}% de ahorro.`
    }

}

let descuento1=new TicketDescuento("D-VERANO", 20);
let descuento2=new TicketDescuento("VERANO", 20);
let descuento3=new TicketDescuento("D-PROMO", 90);
let descuento4=new TicketDescuento("D-PROMO",-10);

console.log(descuento1);
console.log(descuento2);
console.log(descuento3);
console.log(descuento4);