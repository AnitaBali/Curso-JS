let termometro={
    celsius:25,

    get fahrenheit(){
        return this.celsius*1.8+32;
    }
}

console.log(termometro.fahrenheit);