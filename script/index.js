// // PROYECTO FINAL

// // Estoy pensando en armar una tienda online para el proyecto que hice en Desarrollo Web, vendiendo láminas de las obras de la artista e incluso sus cuadros.
// // En su defecto armar un e-comerce desde cero para aprovechar y practicar un poco más del lado del desarrillo.
// // Como no lo tengo definido del todo y ya que tengo herramientas limitadas, de momento, el tema usado para esta preentrega es una panchería.

// alert('Bienvenido a Juancho Pancho');
// alert('Nuestros precios son:\nPancho    €3\nPancho + Papas Fritas    €4.5\nPancho + Bebida    €4\nPancho Combo (c/ Papas + Bebida)    €5\nPorción de papas fritas    €2\nBebida    €1.5');
// const nombre = prompt('Para comenzar el pedido ingrese su nombre:');

// console.log('Datos de control:');
// console.log(nombre);


// // Productos

// class Product {
//     constructor(id, name, desctription, price) {
//             this.id = id,
//             this.name = name,
//             this.desctription = desctription,
//             this.price = price
//     }
// }

// const panchoSolo = new Product(1, 'Pancho Solo', '¿Qué más decir? Un pancho, clásico, como el de toda la vida.', 3);
// const panchoPapas = new Product(2, 'Pancho con papas fritas', 'El clásico de siempre acompañado de sus mejores amigas, las fritas.', 4.5);
// const panchoBebida = new Product(3, 'Pancho con bebida', 'El clásico de siemrpe y la herramienta ideal para bajarlo.', 4);
// const panchoCombo = new Product(4, 'Pancho Combo', 'Para los que quieren más, mandale combo.', 5);


// // Array productos

// const products = [panchoSolo, panchoPapas, panchoBebida, panchoCombo];
// console.log('Array: '+products);
// console.log('Largo del array: '+products.length);


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

// // let descuentoCombo = 0;
// // let panchoPapas = 0;
// // let panchoBebida = 0;
// // let panchoSolo = 0;

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










// // // Proyecto tercera preentrega

// Creo clase producto

class Product {
    constructor(id, name, desctription, price, demand) {
        this.id = id,
            this.name = name,
            this.desctription = desctription,
            this.price = price
            // this.demand = demand
    }
}

// // Productos

// const panchoSolo = new Product(1, 'Pancho Solo', '¿Qué más decir? Un pancho, clásico, como el de toda la vida.', 3, 0);
// const panchoPapas = new Product(2, 'Pancho con papas fritas', 'El clásico de siempre acompañado de sus mejores amigas, las fritas.', 4.5, 0);
// const panchoBebida = new Product(3, 'Pancho con bebida', 'El clásico de siemrpe y la herramienta ideal para bajarlo.', 4, 0);
// const panchoCombo = new Product(4, 'Pancho Combo', 'Para los que quieren más, mandale combo.', 5, 0);


// // Array productos

// const products = [panchoSolo, panchoPapas, panchoBebida, panchoCombo];

// Esta vez creo los productos directamente en el Array como vimos en clase y voy a quitar la demanda del array y trabajarla en el carrito

const products = [
    new Product(1, 'Pancho Solo', '¿Qué más decir? Un pancho, clásico, como el de toda la vida.', 3),
    new Product(2, 'Pancho con papas', 'El clásico de siempre acompañado de sus mejores amigas, las fritas.', 4.5),
    new Product(3, 'Pancho con bebida', 'El clásico de siemrpe y la herramienta ideal para bajarlo.', 4),
    new Product(4, 'Pancho Combo', 'Para los que quieren más, mandale combo.', 5),
]


// Agrego cards al menú

const divProducts = document.querySelector('#menu');
const checkoutBtn = document.querySelector('#checkout_btn');

// let noProdSelected = products.some(prod => prod.demand > 0);

// // Función para habilitar el botón finalizar
// function selected(noProdSelected){
//     if (noProdSelected) {
//         return checkoutBtn.setAttribute('class','btn btn-outline-success');
//     }
//     else {
//         return checkoutBtn.setAttribute('class', 'btn btn-outline-secondary disabled');
//     }
// }

// Esta vez simplifico combinando lo visto en el ejercicio en clase con mi desarrollo previo

products.forEach(prod => {
    // por cada producto en el array genero una card
    divProducts.innerHTML += `<div class="card prod">
        <img src="./assets/img/img_prod${prod.id}.webp" class="card-img-top" alt="${prod.name}">
        <div class="card-body">
            <h5 class="card-title">${prod.name}</h5>
            <p class="card-text">Precio: €${prod.price}</p>
            <p class="card-text fst-italic">${prod.desctription}</p>
            <button id="add_prod_${prod.id}" class="btn btn-outline-primary add_prod_btn">Agregar al carrito</button>
        </div>
    </div>`
});

// creo carrito vacío, array de botones "agregar" y detalle del carrito
const cart = [];
const addProdBtns = document.querySelectorAll('.add_prod_btn');
const cartDetail = document.querySelector('#cart_detail');
// console.log(addProdBtns);

addProdBtns.forEach(btn=>{
    btn.onclick = ()=>{

        // guardo el producto seleccionado buscando el id del botón correspondiente
        const prodSel = products.find(prod=>`add_prod_${prod.id}`===btn.id);
        // console.log(prod);

        // verifico si el producto ya está ne el carrito de compras
        const alreadyInCart = cart.findIndex(prod=>prod.id===prodSel.id);
        console.log(alreadyInCart)
        if(alreadyInCart === -1){
            // si no estaba creo un objeto con las propiedades del producto seleccionado y cantidad = 1 y lo agrego al carrito
            const prodToCart = {
                id: prodSel.id,
                name: prodSel.name,
                price: prodSel.price,
                qty: 1,
            }
            cart.push(prodToCart);
        } else{
            // si ya estaba en el carrito le sumo una unidad
            cart[alreadyInCart].qty++;
        }
        // console.log(cart);

        // activo el botón de checkout
        checkoutBtn.setAttribute('class','btn btn-outline-success');

        // genero un toast que avisa que el producto fue agregado al carrito
        Toastify({
            text:'Producto agregado al carrito',
        }).showToast();

        // reseteo el detalle del carrito
        cartDetail.innerHTML = `<div id="cart_detail"></div>`

        // creo el detalle del carrito
        cart.forEach(prod=>{
            // creo un div por cada producto
            const cartProd = document.createElement('div');
            cartProd.innerHTML = `<div class="btn btn-light position-relative cart_prod m-1">
                ${prod.name}<span class="position-absolute top-50 start-0 translate-middle badge rounded-pill bg-success">
                ${prod.qty}</span><span id="reset_qty_${prod.id}" class="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger">
                X</span></div>`;
            cartDetail.append(cartProd);

            // guardo el botón de reseteo de cantidad
            const resetQtyBtn = document.querySelector(`#reset_qty_${prod.id}`);
            resetQtyBtn.onclick = ()=>{
                // busco el index del producto a eliminar y lo elimino del carrito
                const resetIndex = cart.findIndex(p=>p.id===prod.id)
                cart.splice(resetIndex,1);
                // elimino el detalle del producto del detalle del carrito
                cartProd.remove();
                // si no quedan elementos en el carrito inhabilito el botón de checkout
                if(cart.length===0){
                    checkoutBtn.setAttribute('class','btn btn-outline-secondary disabled');
                }
            }
        });
    }
});




// products.forEach((prod) => {
//     const prodCard = document.createElement('div');
//     prodCard.setAttribute('class', 'col');
//     prodCard.innerHTML =
//         `<div class="card prod">
//         <img src="./assets/img/img_prod${prod.id}.webp" class="card-img-top" alt="${prod.name}">
//         <div class="card-body">
//             <h5 class="card-title">${prod.name}</h5>
//             <p class="card-text">Precio: €${prod.price}</p>
//             <p class="card-text fst-italic">${prod.desctription}</p>
//             <button id="add_prod_${prod.id}" class="btn btn-outline-primary">Agregar al carrito</button>
//         </div>
//     </div>`
//     divProducts.append(prodCard);

//     let qty = `prod${prod.id}q`;
//     // console.log(qty);
//     eval(qty + "= parseInt('0')");
//     // Genero el string del ID y guardo el botón en una const
//     const addProdId = `#add_prod_${prod.id}`;
//     const addProdBtn = document.querySelector(`${addProdId}`);

//     // Genero el string del ID y guardo el párrafo en una const
//     const prodQtyId = `#quantity${prod.id}`;
//     const nodeQty = document.querySelector(`${prodQtyId}`);

//     let qP = `q${prod.id}p`;
//     eval(qP + "= document.createElement('div')");
//     eval(qP + ".setAttribute('class','card-text')");
//     addProdBtn.onclick = () => {
//         prod.demand += 1;
//         console.log(`La demanda del prod ${prod.name} es: ${prod.demand}`);
//         if (prod.demand > 0) {
//             eval(qP + '.innerHTML = `<div>Cantidad de ${prod.name}: ${prod.demand}<button id="reset_prod_${prod.id}" type="button" class="btn-close"></button></div>`');
//             nodeQty.append(eval(qP));
//             const resetQtyId = `#reset_prod_${prod.id}`;
//             const resetQtyBtn = document.querySelector(`${resetQtyId}`);
//             resetQtyBtn.onclick = () => {
//                 prod.demand = 0;
//                 console.log(`Demanda de ${prod.name} reseteada a ${prod.demand}`);
//                 eval(qP + `.remove()`);
//                 noProdSelected = products.some(prod => prod.demand > 0);
//                 selected(noProdSelected);
//             }
//         }
//         noProdSelected = products.some(prod => prod.demand > 0);
//         selected(noProdSelected);
//     }
// })

// // Calculo importe
// const checkoutCardNode = document.querySelector('#checkout_card');
// const cartDiv = document.querySelector('#cart_div');
// let check = 0;


// checkoutBtn.onclick = () => {
//     divProducts.remove();
//     cartDiv.remove();
//     for (i = 0; i < products.length; i++) {
//         check += products[i].price * products[i].demand;
//     }

//     console.log(check)
//     const checkoutCard = document.createElement('div');
//     checkoutCard.setAttribute('class', 'col');
//     checkoutCard.innerHTML =
//         `<div class="card">
//         <div class="card-body">
//             <h5 class="card-title">El total de su compra es:</h5>
//             <p class="card-text">€${check}</p>
//             <p class="card-text fst-italic">Gracias por su compra.</p>
//         </div>
//     </div>`
//     checkoutCardNode.append(checkoutCard);


//     check = 0;
// }