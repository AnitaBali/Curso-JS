/*
1. ¿Qué es el Polimorfismo?
La palabra viene del griego: Poli (muchas) y Morfismo (formas). 
En programación, significa que un mismo método puede ejecutarse de formas 
distintas dependiendo de qué objeto lo llame.

La idea clave: Tú, como programador, le das la misma orden a diferentes objetos 
("¡Muévete!", "¡Calcula!", "¡Dibuja!"), y cada objeto sabe cómo hacerlo a su manera 
sin que tú tengas que preguntarles qué son.

2. ¿Cómo se aplica? (La Sobrescritura)
Para aplicar el polimorfismo, usamos la Sobrescritura de métodos. Esto ocurre cuando 
el hijo define un método que se llama exactamente igual que uno del padre.
      - Si el hijo NO tiene el método, usa el del padre (Herencia simple).

      - Si el hijo SÍ tiene el método, el suyo "pisa" al del padre (Polimorfismo).

💡 Diferencia clave con lo que hacías antes:
----En Herencia (lo que hacías): Usabas super.metodo() para sumar el texto del hijo al del padre.
----En Polimorfismo: El hijo suele reemplazar totalmente la lógica del padre porque su forma de 
    hacer las cosas es única.

**/

// CLASE PADRE
class Figura {
    constructor(color) {
        this.color = color;
    }

    // El padre tiene un método genérico
    calcularArea() {
        return "No se puede calcular el área de una figura genérica";
    }
}

// CLASE HIJA 1
class Cuadrado extends Figura {
    constructor(color, lado) {
        super(color);
        this.lado = lado;
    }

    // SOBRESCRITURA: El hijo usa el MISMO NOMBRE que el padre
    calcularArea() {
        return this.lado * this.lado;
    }
}

// CLASE HIJA 2
class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }

    // SOBRESCRITURA: Aquí la fórmula es totalmente distinta
    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

const misFiguras = [
    new Cuadrado("rojo", 5),
    new Circulo("azul", 3),
    new Cuadrado("verde", 2)
];

// No importa qué sea cada cosa, todos responden a "calcularArea()"
misFiguras.forEach(figura => {
    console.log(`Área: ${figura.calcularArea()}`);
});