let mapa=[["Bosque","Bosque","Bosque"],
          ["Bosque","Castillo","Bosque"],
          ["Mar","Mar","Mar"]];

mapa[1][1]="Jugador";
console.table(mapa);

console.log(mapa);
/*

¿Qué hace exactamente console.table()?
Mientras que console.log te escupe el texto o el objeto de forma plana 
, console.table detecta que le has pasado un Array o una 
Matriz y la dibuja como una tabla con bordes, filas y columnas.
Las 3 grandes ventajas:
- Visualización instantánea: En lugar de ver [ [ 'A', 'B' ], [ 'C', 'D' ] ], 
  ves una cuadrícula real donde las filas están numeradas a la izquierda y las columnas arriba.

- Índices claros: Te marca el índice (index) de cada fila, lo que te ayuda muchísimo }
  a no perderte con los números [0], [1], etc.

- Orden: Si tienes una lista de objetos (como una base de datos), 
  te pone cada propiedad en una columna distinta.
**/