let perfil={
    correo:"ana.gar@gmail.com",

    get nombreUsuario(){
        let extraerCadena=this.correo.split("@")[0];
        return extraerCadena;
    }
}

console.log(perfil.nombreUsuario);