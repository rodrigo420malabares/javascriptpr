class Auto{
    constructor(marca, modelo,){
        this.marca= marca;
        this.modelo= modelo;
        this.encendido = false;
    }

enciende(encendido){
    let operacion = prompt("¿Qué operacion querés hacer? 1. prender , 2. apagar , ");
    if(operacion == 1) {
     console.log('auto prendido')
    }
    else {
    console.log('auto apagado')
    }
}

}

const auto1 = new Auto(`renault`,`9`,false);
console.log(auto1);





