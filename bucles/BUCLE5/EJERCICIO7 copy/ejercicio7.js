let suma,numero,operacion;

suma = 0;
// la suma debe ser menor a 100 para que siga pidiendo numeros


do {
    num = parseInt(prompt(`ingrese un numero`))
    // operacion = prompt(`ingrese la operacion a realizar:\n 1 "+"(sumar)\n 2 "="(finalizar)`)
    suma = suma + num;
    alert(suma)

} while (operacion = 2);