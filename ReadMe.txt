Parte del código del trabajo para la segunda preentrega antes de resumirlo para que trabaje de forma dinámica.

// Tengo que estudiar la forma de crear variables de forma dinámica

// Cantidades por item

// let prod1q = 0;
// let prod2q = 0;
// let prod3q = 0;
// let prod4q = 0;

// Añadir producto al carrito

// products.forEach((prod)=>{
//     const addProdBtn(prod) = document.querySelector(`#add_prod_${prod.id}`)
// })

// const addProdBtn1 = document.querySelector('#add_prod_1');
// const addProdBtn2 = document.querySelector('#add_prod_2');
// const addProdBtn3 = document.querySelector('#add_prod_3');
// const addProdBtn4 = document.querySelector('#add_prod_4');

// const nodeQ1 = document.querySelector('#quantity1');
// const nodeQ2 = document.querySelector('#quantity2');
// const nodeQ3 = document.querySelector('#quantity3');
// const nodeQ4 = document.querySelector('#quantity4');

// const q1p = document.createElement('p');
// q1p.setAttribute('class','card-text');
// const q2p = document.createElement('p');
// q2p.setAttribute('class','card-text');
// const q3p = document.createElement('p');
// q3p.setAttribute('class','card-text');
// const q4p = document.createElement('p');
// q4p.setAttribute('class','card-text');


// addProdBtn1.onclick = ()=>{
//     prod1q = prod1q + 1;     
//     console.log(`Cantidad de Pancho solo: ${prod1q}`)
//     if(prod1q>0){
//         q1p.innerHTML = `<div>Cantidad de Pancho solo: ${prod1q}<button id="reset_prod1q" type="button" class="btn-close"></button></div>`;
//         nodeQ1.append(q1p);
//         const reset_prod1q = document.querySelector('#reset_prod1q');
//         reset_prod1q.onclick = ()=>{
//             prod1q = 0;
//             console.log(prod1q);
//             q1p.remove();
//         }        
//     }
// }

// addProdBtn2.onclick = ()=>{
//     prod2q = prod2q + 1;     
//     console.log(`Cantidad de Pancho con papas fritas: ${prod2q}`);
//     if(prod2q>0){
//         q2p.innerHTML = `<div>Cantidad de Pancho con papas fritas: ${prod2q}<button id="reset_prod2q" type="button" class="btn-close"></button></div>`;
//         nodeQ2.append(q2p)
//         const reset_prod2q = document.querySelector('#reset_prod2q');
//         reset_prod2q.onclick = ()=>{
//             prod2q = 0;
//             console.log(prod2q);
//             q2p.remove();
//         }
//     }
// }
// addProdBtn3.onclick = ()=>{
//     prod3q = prod3q + 1;     
//     console.log(`Cantidad de Pancho con bebida: ${prod3q}`);
//     if(prod3q>0){
//         q3p.innerHTML = `<div>Cantidad de Pancho con bebida: ${prod3q}<button id="reset_prod3q" type="button" class="btn-close"></button></div>`;
//         nodeQ3.append(q3p)
//         const reset_prod3q = document.querySelector('#reset_prod3q');
//         reset_prod3q.onclick = ()=>{
//             prod3q = 0;
//             console.log(prod3q);
//             q3p.remove();
//         }
//     }
// }
// addProdBtn4.onclick = ()=>{
//     prod4q = prod4q + 1;     
//     console.log(`Cantidad de Pancho combo: ${prod4q}`);
//     if(prod4q>0){
//         q4p.innerHTML = `<div>Cantidad de Pancho combo: ${prod4q}<button id="reset_prod4q" type="button" class="btn-close"></button></div>`;
//         nodeQ4.append(q4p)
//         const reset_prod4q = document.querySelector('#reset_prod4q');
//         reset_prod4q.onclick = ()=>{
//             prod4q = 0;
//             console.log(prod4q);
//             q4p.remove();
//         }  
//     }
// }

// Finalizar compra

// Creo carrito

// class Shopcart{
//     constructor(id,quantity){
//         this.id=id,
//         this.quantity=quantity
//     }
// }

// const cart = [];
