let num1, num2, operacion, resultado;

num1 = parseFloat(prompt('ingrese el primero número'));
num2 = parseFloat(prompt('ingrese el segundo numero'));
operacion = prompt('ingrese la operacion que desea realizar: \n 1 "+"(sumar)\n 2 "-"(restar)\n 3 "*"(multiplicar)\n 4 "/"(dividir)\n 5 `=`(finalizar) ');

switch (operacion) {
    case "1":
        resultado = num1 + num2;
        alert(`el resultado de la suma de los numeros ${num1} y ${num2} es: ${resultado}`)
        break;
    case "2":
        resultado = num1 - num2;
        alert(`el resultado de la suma de los numeros ${num1} y ${num2} es: ${resultado}`)
        break;
    case "3":
        resultado = num1 * num2;
        alert(`el resultado de la suma de los numeros ${num1} y ${num2} es: ${resultado}`)
        break;
    case "4":
        if (num2 != 0) {
            resultado = num1 / num2;
             alert(`el resultado de la division de los numeros ${num1} y ${num2} es: ${resultado}`)
        } else {
            alert(`no se puede dividir por cero!`)
        }
            
            break;
    // case "=":
    //     resultado = num1 + num2;
    //     alert(`el resultado de la suma de los numeros ${num1} y ${num2} es: ${resultado}`)
    //     break;

    default:
        alert(`ingreso una operacion incorrecta`)
        break;
}