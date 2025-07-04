let edad;
edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 16) {
    alert("usted puede votar");
} else if (edad < 0) {
    alert("Ingrese una edad valida")
} else if (edad < 16) {
    alert("usted no puede votar");
} else {
    alert("Ingreso un valor no númerico");
}