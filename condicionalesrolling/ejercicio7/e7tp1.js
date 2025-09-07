// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo: 

// input: 15 , 3, 9


// Output: El 15 es el número más grande

alert("ingresa 3 numeros y te dire cual es el mayor")

let num1 = parseInt(prompt("ingre un número"));
let num2 = parseInt(prompt("ingre otro número"));
let num3 = parseInt(prompt("ingre otro número"));

if (num1 > num2 & num1 > num3) {
    document.writeln(`el ${num1} es el mas grande`);
}
else if(num2 > num1 & num2 > num3) {
    document.writeln(`el ${num2} es el mas grande`);
}

else if(num3 > num1 & num3 > num2){
    document.writeln(`el ${num3} es el mas grande`)
}
else {
    document.writeln(`los numeros son iguales`);
}