let edad;
do {
    edad = parseInt(prompt("Ingrese su edad"));
    if (edad >= 18 && edad <= 99) {
        console.log("su edad es de " + edad + " años");
        alert("su edad es de " + edad + " años");
    }
} while (edad < 18 || edad > 99 || isNaN(edad));