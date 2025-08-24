let dado1 = [];
let dado2 = [];
let sumadetiros = [];
let resultadodado1;
let resultadodado2;
let sumadados = [];


// for (let i = 0; i < 50; i++) {
//     resultadodado1 = Math.floor(Math.random() * 6) + 1;
// // console.log(dado1);
//     dado1.push(resultadodado1 +"<br>");

//         resultadodado2 = Math.floor(Math.random() * 6) + 1;
// // console.log(dado1);
//     dado2.push(resultadodado2);
 
 
// }





for (let i = 0; i < 50; i++) {

    dado1.push(Math.floor(Math.random() * 6) + 1);

    dado2.push(Math.floor(Math.random() * 6) + 1);
 
 
}

// for (let i = 0; i < 50; i++) {
//     resultadodado2 = Math.floor(Math.random() * 6) + 1;
// // console.log(dado1);
//     dado2.push(resultadodado2);
 
// }


for (let i = 0; i < 50; i++) {
    sumadados.push(dado1[i] + dado2[i] + "<br>")
    
}


document.writeln(sumadados + "<br>")