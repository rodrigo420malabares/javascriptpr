function sumar (num1 , num2) {
    return num1 + num2;
}
function restar (num1 , num2) {
    return num1 - num2;
}
function multiplicar (num1 , num2) {
    return num1 * num2;
}
function dividir (num1 , num2) {
    if (num2 == 0) {
        return "Error: No se puede dividir por cero";
    }
    return num1 / num2;
}

let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

let operacion = prompt("¿Qué operacion querés hacer? 1. SUMAR , 2. RESTAR , 3. MULTIPLICAR , 4. DIVIDIR , 5. FINALIZAR");
if (operacion == "1") { do {
    alert("El resultado de la suma es: " + sumar(num1, num2));
} while (condition);
    
}else if (operacion == "2") {
    alert("El resultado de la resta es: " + restar(num1, num2));
}else if (operacion == "3") {
    alert("El resultado de la multiplicación es: " + multiplicar(num1, num2));
}else if (operacion == "4") {
    alert("El resultado de la división es: " + dividir(num1, num2));
}