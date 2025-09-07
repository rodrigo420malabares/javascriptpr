// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo: 

// input: 10
// input: 15
// Output: El 10 es divisible por 2.
// Output: El 15 no es divisible por 2.


let num = parseInt(prompt("ingrese un numero entero para ver si es divisible o no por 2."));


if (num%2 == 0) {
    alert(`el ${num} es divisible por 2.`)
    
}
else if(num%2 !== 0) {
    alert(`el ${num} no es divisible por 2.`)
}

else {
    alert(`ingrese un numero entero`)
}