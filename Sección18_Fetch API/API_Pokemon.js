const obtenerPokemon = async () =>{

    const respuesta= await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const datos = await respuesta.json();

  console.log("Caja completa (objeto):", datos);
  console.log("Nombre Pokemon: " + datos.name.toUpperCase());
  console.log("Peso: " + datos.weight);


}

obtenerPokemon();