//! Imposta strutture VAR, LET, CONST
//! Differenza fondamentale tra VAR, LET, CONST

var boxOne = "Bruno";
var boxOne = 213;
// con VAR posso ridichiarare la stessa variabile

let boxTwo = "Stano";
// % let boxTwo = 213;
// con LET non posso ridichiarare la stessa variabile

//* ______________________________________________

let piGreco = 3.14;
piGreco = 3;
// con LET e VAR posso riassegnare la stessa variabile

const PI = 3.14;
//% PI = 3;
// con CONST non posso riassegnare la stessa variabile

//! Utilizza anche un tipo booleano e concatenalo in 
//! una stringa o ad una variabile di tipo stringa

let valoreBooleano = true;
valoreBooleano += boxTwo; // trueBruno
// stessa cosa di valoreBooleano = valoreBooleano + bowTwo

//! Esegui delle operazioni di somma e sottrazione

4 + 2; // 6
boxOne + 3; // 219
200 - 100; // 100

//! Mostrare con direttive output il risultato degli script

console.log("valoreBooleano = " + valoreBooleano);
console.log("PI = " + PI);
console.log("piGrego = " + piGreco);
console.log("boxOne = " + boxOne);
console.log("boxTwo = " + boxTwo);