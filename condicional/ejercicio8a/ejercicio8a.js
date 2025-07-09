let nota;

nota = parseFloat(prompt("Ingrese su nota"));
if (nota > 10){
    alert("valor incorrecto");
}
else if (nota == 10) {
    alert("EXCELENTE");
}

else if(nota >= 4){
    alert("APROBADO");
     }
else if (nota <1) {
    alert("valor incorrecto");
}
 else if( 1 > nota <= 3){
     alert("DESAPROBADO");
}
