function Persona(nombre,velocidad){
    this.nombre=nombre;
    this.velocidad=velocidad;

}

Persona.prototype.caminar=function(){
    return `${this.nombre} camina a ${this.velocidad} km/h.`
}

Persona.prototype.correr=function(){
    return `${this.nombre} corre a ${this.velocidad*2} km/h.`
}

let usain=new Persona("Usain", 10);

console.log(usain.caminar());
console.log(usain.correr());