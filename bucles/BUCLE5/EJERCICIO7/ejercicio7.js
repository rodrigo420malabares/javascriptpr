let suma,numero;

suma = 0;
// la suma debe ser menor a 100 para que siga pidiendo numeros

do {
    num = parseInt(prompt(`ingrese un numero`))
    
    suma = suma + num;
    alert(suma)

} while (suma < 100);