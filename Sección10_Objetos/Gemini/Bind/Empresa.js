let empresa={
    nombre:"TechCorp"
};

function info(ciudad){
    return `${this.nombre} ubicada en ${ciudad}.`;
};

let verEmpresa=info.bind(empresa);
console.log(verEmpresa("Madrid"));