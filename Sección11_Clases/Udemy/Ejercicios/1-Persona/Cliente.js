class Cliente extends Persona{

     static contadorClientes=0;

    constructor(fechaRegistro) {
        this._fechaRegistro=fechaRegistro;
        this._idCliente=++ Cliente.contadorClientes;
    }

    set fechaRegistro(valor){
        this._fechaRegistro=valor;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    toString(){
        return super.toString() + `| ${this._idCliente} | ${this._fechaRegistro}`;
    }

}
