class Notificacion{

    constructor(usuario) {
        this._usuario=usuario;
    }

    enviar(){
        return "Enviando alerta...";
    }
}

class Email extends Notificacion{

    constructor(usuario){
        super(usuario);
    }

    enviar(){
        return "Enviando email con link de confirmación.";
    }
}

class SMS extends Notificacion{

    constructor(usuario){
        super(usuario);
    }

    enviar(){
        return "Enviando SMS con código PIN.";
    }

}

let miLista=[
    new Email("ana"),
    new SMS("borja")
];

miLista.forEach(function(notificacion){
 console.log(`${notificacion._usuario}: ${notificacion.enviar()}`);
});

