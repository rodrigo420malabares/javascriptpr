let num;
num = parseInt(prompt("Ingrese un número entero: "));

if(num == 0){
    alert("El número ingresado es 0(cero)");
} else if(num > 0){
    alert("El número ingresado es positivo");
} else if(num < 0){
    alert("El número es negativo")
} else {
    alert("Ingreso un valor no númerico")
}

