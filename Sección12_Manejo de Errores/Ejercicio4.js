

try{
    throw new Error("Error simulado!");

}catch(error){

    console.log(error.message);

}finally{
    console.log("Esto se ejecuta siempre, haya error o no.")
}