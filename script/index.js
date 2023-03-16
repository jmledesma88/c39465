// PROYECTO FINAL

// Estoy pensando en armar una tienda online para el proyecto que hice en Desarrollo Web, vendiendo láminas de las obras de la artista e incluso sus cuadros.
// En su defecto armar un e-comerce desde cero para aprovechar y practicar un poco más del lado del desarrillo.
// Como no lo tengo definido del todo y ya que tengo herramientas limitadas, de momento, el tema usado para esta preentrega es una panchería.

// alert('Bienvenido a Juancho Pancho');
// alert('Nuestros precios son:\nPancho    €3\nPancho + Papas Fritas    €4.5\nPancho + Bebida    €4\nPancho Combo (c/ Papas + Bebida)    €5\nPorción de papas fritas    €2\nBebida    €1.5');
// const nombre = prompt('Para comenzar el pedido ingrese su nombre:');

// console.log('Datos de control:');
// console.log(nombre);


// // Panchos

// const cantPanchos = parseInt(prompt('¿Cuantos panchos va a querer?'));

// console.log('Cantidad de panchos: '+cantPanchos);



// // Papas fritas

// let papas = prompt('¿Los va a querer acompañar con papas fritas? \n\nPor favor indique SI ó NO:').toLowerCase();
// let cantPapas = 0;
// let cantPapas2 = 0;
// let papasExtra = 0;

// while(papas!=='si' && papas!=='no'){
//     alert('El valor ingresado no es válido, pruebe nuevamente.');
//     papas = prompt('¿Los va a querer acompañar con papas fritas? \n\nPor favor indique SI ó NO:').toLowerCase();
// }

// if(papas==='si'){
//     cantPapas = parseInt(prompt('¿Cuantas acompañamientos de papas fritas va a querer?'));
//     if(cantPapas>cantPanchos){
//         papasExtra = cantPapas-cantPanchos;
//         cantPapas2 = cantPanchos;
//         alert('No puede llevar más papas fritas de acompañamiento que la cantidad de panchos indicada. \nDeberá abonar las '+papasExtra+' excedentes por separado.');
//     } else{
//         cantPapas2 = cantPapas;
//     }
// } 

// console.log('Cantidad de papas total: '+cantPapas);
// console.log('Cantidad de papas descuento: '+cantPapas2);
// if(papasExtra>0){
//     console.log('Cantidad de papas extra: '+papasExtra);
// }



// // Bebidas

// let bebidas = prompt('¿Los va a querer acompañar con bebidas? \n\nPor favor indique SI ó NO:').toLowerCase();
// let cantBebidas = 0;
// let cantBebidas2 = 0;
// let bebidasExtra = 0;

// while(bebidas!=='si' && bebidas!=='no'){
//     alert('El valor ingresado no es válido, pruebe nuevamente.');
//     bebidas = prompt('¿Los va a querer acompañar de bebidas? \n\nPor favor indique SI ó NO:').toLowerCase();
// }

// if(bebidas==='si'){
//     cantBebidas = parseInt(prompt('¿Cuantos va a acompañar de bebidas?'));
//     if(cantBebidas>cantPanchos){
//         bebidasExtra = cantBebidas-cantPanchos;
//         cantBebidas2 = cantPanchos;
//         alert('No puede llevar más papas fritas de acompañamiento que la cantidad de panchos indicada. \nDeberá abonar las '+bebidasExtra+' excedentes por separado.');
//     } else{
//         cantBebidas2 = cantBebidas;
//     }
// } 

// console.log('Cantidad de bebidas total: '+cantBebidas);
// console.log('Cantidad de bebidas descuento: '+cantBebidas2);
// if(bebidasExtra>0){
//     console.log('Bebidas extra: '+bebidasExtra);
// }



// // Cálculos

// let descuentoCombo = 0;
// let panchoPapas = 0;
// let panchoBebida = 0;
// let panchoSolo = 0;

// if(cantPapas2>cantBebidas2){
//     descuentoCombo = cantBebidas2;
//     panchoPapas = cantPapas2-cantBebidas2;
// } else if(cantPapas2<cantBebidas2){
//     descuentoCombo = cantPapas2;
//     panchoBebida = cantBebidas2-cantPapas2;
// } else if(cantPapas2===cantBebidas2){
//     descuentoCombo = cantPapas2;
// }

// if(cantPanchos>cantPapas && cantPanchos>cantBebidas){
//     if(cantPapas>cantBebidas){
//         panchoSolo = cantPanchos-cantPapas;
//     } else{
//         panchoSolo = cantPanchos-cantBebidas;
//     }
// }



// // Facturación

// console.log('----------------------------')
// console.log('Pedido final a nombre de '+nombre+':')
// alert('Su pedido es:');
// if(descuentoCombo>0){
//     console.log('Panchos en Combo --- '+descuentoCombo);
//     alert('Panchos en combo (papas + bebida): '+descuentoCombo);
// }
// if(panchoPapas>0){
//     console.log('Panchos con papas --- '+panchoPapas);
//     alert('Panchos con papas: '+panchoPapas);
// }
// if(panchoBebida>0){
//     console.log('Panchos con bebida --- '+panchoBebida);
//     alert('Panchos con bebida: '+panchoBebida);
// }
// if(panchoSolo>0){
//     console.log('Panchos solos --- '+panchoSolo);
//     alert('Panchos solos: '+panchoSolo);
// }
// if(papasExtra>0){
//     console.log('Porciones de papas extra --- '+papasExtra);
//     alert('Porciones de papas fritas extra: '+papasExtra);
// }
// if(bebidasExtra>0){
//     console.log('Bebidas extra --- '+bebidasExtra);
//     alert('Bebidas extra: '+bebidasExtra);
// }

// const precioFinal = (panchoSolo*3+panchoPapas*4.5+panchoBebida*4+descuentoCombo*5+papasExtra*2+bebidasExtra*1.5);
// console.log('Total compra = '+precioFinal);

// alert('El total a pagar es €'+precioFinal+'\n\nUn placer haberle atendido, '+nombre+'. Aguarde a ser llamado para recoger su pedido.\n\n¡Hasta la próxima!');


// Creo clase producto

class Product {
    constructor(id, name, desctription, price, img) {
        this.id = id,
            this.name = name,
            this.desctription = desctription,
            this.price = price,
            this.img = img
    }
}

// Productos

const panchoSolo = new Product(1, 'Pancho Solo', '¿Qué más decir? Un pancho, clásico, como el de toda la vida.', 3);
const panchoPapas = new Product(2, 'Pancho con papas fritas', 'El clásico de siempre acompañado de sus mejores amigas, las fritas.', 4.5);
const panchoBebida = new Product(3, 'Pancho con bebida', 'El clásico de siemrpe y la herramienta ideal para bajarlo.', 4);
const panchoCombo = new Product(4, 'Pancho Combo', 'Para los que quieren más, mandale combo.', 5);


// Array productos

const products = [panchoSolo, panchoPapas, panchoBebida, panchoCombo];


// Agrego cards al menú

const selectNode = document.querySelector('#menu');
products.forEach((prod) => {
    const prodCard = document.createElement('div');
    prodCard.setAttribute('class','col');
    prodCard.innerHTML = 
    `<div class="card prod">
        <img src="./assets/img/img_prod${prod.id}.webp" class="card-img-top" alt="${prod.name}">
        <div class="card-body">
            <h5 class="card-title">${prod.name}</h5>
            <p class="card-text">Precio: €${prod.price}</p>
            <p class="card-text fst-italic">${prod.desctription}</p>
            <a id="select_prod_${prod.id}" class="btn btn-outline-primary">Agregar al carrito</a>
        </div>
    </div>`                    
    selectNode.append(prodCard);
})


// Creo carrito

const cart = [];


// Añadir producto al carrito

