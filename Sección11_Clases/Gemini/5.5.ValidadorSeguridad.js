class Validador{

    static esEmailValido(email){
        return email.includes("@");
    }
}

console.log(Validador.esEmailValido("ana.gargon@outlook.com"));
console.log(Validador.esEmailValido("ana.gargonoutlook.com"));