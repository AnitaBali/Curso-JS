let chefA={
    especialidad:"Pizza",
    
    cocinar:function(ingrediente1,ingrediente2){
        return `Cocinando ${this.especialidad} de ${ingrediente1} y ${ingrediente2}.`;
    }
};

let chefB={
    especialidad:"Sushi"
};

console.log(chefA.cocinar.apply(chefB,["Atún", "Wasabi"]));
