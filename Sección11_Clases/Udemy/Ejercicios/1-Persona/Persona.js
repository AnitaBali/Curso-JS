class Persona{

    static contadorPersonas=0;

    constructor(nombre, apellido,edad){

        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
        this._idPersona=++Persona.contadorPersonas;
        
    }

    
    set nombre(valor){
        this._nombre=valor;
    }

    get nombre(){
        return this._nombre;
    }

    set apellido(valor){
        this._apellido=valor;
    }

    get apellido(){
        return this._apellido;
    }

    set edad(valor){
        this._edad=valor;
    }

    get edad(){
        return this._edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    toString(){
        return `${this._idPersona} | ${this._nombre} | ${this._apellido} | ${this._edad} `;
    }
    
}

