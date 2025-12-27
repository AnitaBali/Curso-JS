function obtenerDominio(url){
    limpiar=url.replace("https://","");
    return limpiar;
}

url1=obtenerDominio("https://google.com");
url2=obtenerDominio("htps://google.com");

console.log(url1);
console.log(url2);