class Contabilidad{

    static aplicarIVA(precio){
        return precio*1.21;
    }
}

console.log(Contabilidad.aplicarIVA(100));
console.log(Contabilidad.aplicarIVA(500));