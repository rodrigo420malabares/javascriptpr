let año;

año = parseInt(prompt("Ingrese un año"));

if (año < 100 && año % 4 == 0) {
    alert(" el año es bisiesto");
} else if (año >= 100 && año % 100 == 0 && año % 400 == 0 && año % 4 == 0) {
    alert("el año es bisiesto");
} else if (año >= 100 && año % 4 == 0 && año % 100 == 0) {
    alert("el año no es bisiesto ");
} else if (año >= 100 && año % 4 == 0 && año % 100 != 0) {
    alert("el año es bisiesto");

} else  {
    alert("el año no es bisiesto");
}