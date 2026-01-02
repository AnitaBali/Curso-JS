class CorreoElectronico{

    constructor(emailRecibido){
        this.direccion=emailRecibido;
    }

    set direccion(valor){
        if(valor.includes("@") && valor.includes(".")){
            this._direccion=valor;
        } else{
            console.log("Error: El formato del correo no es válido.");
            this._direccion="formato.invalido";
        }
    }

    get direccion(){
        return `Correo: ${this._direccion.toLocaleLowerCase()}`
    }
}

let email1=new CorreoElectronico("ANA.GARCIA@GMAIL.COM");
let email2=new CorreoElectronico("ANAGARCIA@GMAILCOM");
let email3=new CorreoElectronico("ANAGARCIAGMAILCOM");
let email4=new CorreoElectronico("ANA.GARCIAGMAIL.COM");
let email5=new CorreoElectronico("ana.GARCIA@GMAIL.com");

console.log(email1.direccion);
console.log(email2.direccion);
console.log(email3.direccion);
console.log(email4.direccion);
console.log(email5.direccion);
