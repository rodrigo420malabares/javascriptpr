let num,numsecreto,max;
max = 10;
numsecreto = Math.floor(Math.random() * (max + 1));






do {
    num = parseInt(prompt('trata de adivinar el numero entre 1 y 10'));
    if (num === numsecreto) {
        alert('adivinaste el numero')
    } else {
        alert('intenta de nuevo')
    }
      
} while (num !== numsecreto);
