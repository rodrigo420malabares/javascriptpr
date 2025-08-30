// 3 - Escribe una clase que permita crear distintos objetos “rectángulos”, 
// con las propiedades de alto y ancho, mas los métodos necesarios 
// para modificar y mostrar sus propiedades, calcular el perímetro y el área


class Rectangulo{
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    
    }


perimetro(){
   let perimetro = (this.base+ this.altura)*2
   console.log(`el perimetro del recangulo es ${perimetro}`)
}

area(){
 let area = (this.base * this.altura)
 console.log(`el area de este rectangulo es: ${area}`)
}

}

let rectangulo1 = new Rectangulo(2,4)