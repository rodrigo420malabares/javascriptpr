// 6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo: 

// input: 15 , 3


// Output: El 15 es el número más grande


let num1 = parseInt(prompt("ingre un número"));
let num2 = parseInt(prompt("ingre otro número"));


if (num1 > num2) {
    document.writeln(`el ${num1} es mas grande que el ${num2}`);
}
else if(num2 > num1) {
    document.writeln(`el ${num2} es mas grande que el ${num1}`);
}

else {
    document.writeln(`los numeros son iguales`);
}