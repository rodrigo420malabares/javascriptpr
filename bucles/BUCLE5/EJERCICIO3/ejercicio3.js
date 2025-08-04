let num, resultado;
 
num = parseInt(prompt("Ingrese un número"));

for (let i = 0; i <= 10; i++) {
    resultado = num * i;
    console.log(`${num} * ${i} = ${resultado}`);
    document.writeln(`${num} * ${i} = ${resultado}`);
};