let calculadora={
    a:10,
    b:30,

    sumar:function(){
        return this.a+this.b;
    },

    multiplicar: function(){
        return this.a*this.b;
    }
}

console.log(calculadora.sumar());
console.log(calculadora.multiplicar());