let N1,N2,N3;

N1 = parseFloat(prompt("ingrese tres numeros"));
N2 = parseFloat(prompt("ingrese el segundo valor"));
N3 = parseFloat(prompt("ingrese el tercer valor"));

if(N1 > N2&& N1 > N3){
    alert("el primer valor es el mas grande");
} else if(N2 > N1&& N2 > N3){
    alert("el segundo valor es el mas grande");
} else if(N3 > N1&& N3 > N2){
    alert("el tercer valor es el mas grande");
}

