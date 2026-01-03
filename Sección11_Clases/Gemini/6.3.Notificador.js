class Notificador{

    constructor(usuario){
        if(new.target===Notificador){
            throw new Error("Error");
        }
        this._usuario=usuario;
    }

    enviarMensaje(mensaje){
        throw new Error("Método abstracto...");
    }

}

class Email extends Notificador{

    enviarMensaje(mensaje){
        console.log("Enviando correo a " + this._usuario + ": "+mensaje );
    }
}

class WhatsApp extends Notificador{

    enviarMensaje(mensaje){
        console.log("Enviando WhatsApp a " + this._usuario + ": "+mensaje );
    }
}


//let uno=new Notificador("uno");
let dos=new Email("Ana");
let tres=new WhatsApp("Borja");
dos.enviarMensaje("¿Como estás?");
tres.enviarMensaje("Todo en orden.")

