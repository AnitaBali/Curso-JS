let podometro={
    pasos:0,
    
    caminar: function(){
        
        return ++this.pasos;
    },
    reiniciar: function(){
        return this.pasos=0;
    }
}

console.log(podometro.caminar());
console.log(podometro.caminar());
console.log(podometro.caminar());
console.log(podometro.pasos);
console.log(podometro.reiniciar());
console.log(podometro.pasos);