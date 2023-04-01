// PROYECTO FINAL
// Tercera preentrega

// selecciono div de login
const login = document.querySelector('#login');





// guardo el formulario en una función para poder usarlo según condiciones
function Form(){
    login.innerHTML = 
    `<div class="card text-center col-sm-8 col-md-6 col-lg-4 p-3">
    <h2 id="login_title">Para comenzar ingrese sus datos:</h2>
    <form id="login_form">
        <div class="px-3">
            <label for="user_name" class="form-label">Nombre:</label>
            <input class="form-control" type="text" name="name" id="user_name" required><br>
            <label for="user_surname" class="form-label">Apellido:</label>
            <input class="form-control" type="text" name="surname" id="user_surname" required><br>
            <label for="user_email" class="form-label">Email:</label>
            <input class="form-control" type="email" name="email" id="user_email" required><br>
            <button type="submit" name="submit" value="Comenzar" id="" class="btn btn-primary">Comenzar</button>
        </div>
    </form>
    </div>`;
    const loginForm = document.querySelector('#login_form');
    const userName = document.querySelector('#user_name');
    const userSurname = document.querySelector('#user_surname');
    const userEmail = document.querySelector('#user_email');

    loginForm.onsubmit = (e)=>{
        e.preventDefault()
        const userInfo = {
            name: userName.value,
            surname: userSurname.value,
            email: userEmail.value,
        }
        localStorage.setItem('userInfo',JSON.stringify(userInfo));
        login.remove();
        Swal.fire({
            title: `Bienvenido/a ${userInfo.name} ${userInfo.surname}`,
            confirmButtonText: 'Comenzar',
        })
        Menu();
    }
}


// Creo clase producto
class Product {
    constructor(id, name, desctription, price) {
        this.id = id,
        this.name = name,
        this.desctription = desctription,
        this.price = price
    }
}


// Esta vez creo los productos directamente en el Array como vimos en clase y voy a quitar la demanda del array y trabajarla en el carrito
const products = [
    new Product(1, 'Pancho Solo', '¿Qué más decir? Un pancho, clásico, como el de toda la vida.', 3),
    new Product(2, 'Pancho con papas', 'El clásico de siempre acompañado de sus mejores amigas, las fritas.', 4.5),
    new Product(3, 'Pancho con bebida', 'El clásico de siemrpe y la herramienta ideal para bajarlo.', 4),
    new Product(4, 'Pancho Combo', 'Para los que quieren más, mandale combo.', 5),
]


// Guardo el div de productos
const divProducts = document.querySelector('#menu');


//Guardo el div del carrito
const cartDiv = document.querySelector('#cart_div');


// creo funcion Menu que va a generar los artículos, botones para agregar al carrito y demás
function Menu(){
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

    // creo array de botones agregar
    let addProdBtns = document.querySelectorAll('.add_prod_btn');
    // console.log(addProdBtns)

    // Creo el HTML del carrito para poder asignar la interaccion con los botones agregar y el detalle del carrito
    cartDiv.innerHTML = `
    <div class="card text-center col-4">
        <div class="card-header">
        Carrito:
        </div>
        <div class="card-body">
            <div id="cart_detail"></div>
            <button id="checkout_btn" class="btn btn-outline-secondary disabled">Tramitar pedido</button>
        </div>
    </div>`;

    // creo el array carrito vacío y asigno detalle del carrito a una constante
    const cart = [];
    const cartDetail = document.querySelector('#cart_detail');



    // asigno la funcionalidad a los botones agregar
    addProdBtns.forEach(btn=>{
        btn.onclick = ()=>{
    
            // guardo el producto seleccionado buscando el id del botón correspondiente
            const prodSel = products.find(prod=>`add_prod_${prod.id}`===btn.id);
            // console.log(prod);
    
            // verifico si el producto ya está ne el carrito de compras
            const alreadyInCart = cart.findIndex(prod=>prod.id===prodSel.id);
            // console.log(alreadyInCart)
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
            cartDetail.innerHTML = `<div id="cart_detail"></div>`;
    
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
    
                    // Toast anunciando producto eliminado del carrito
                    Toastify({
                        text:'Producto eliminado del carrito',
                        style: {
                        background: "linear-gradient(90deg, rgba(255,120,120,1) 0%, rgba(255,30,30,1) 100%)",
                        },
                        
                    }).showToast();
            
                    // si no quedan elementos en el carrito inhabilito el botón de checkout
                    if(cart.length===0){
                        checkoutBtn.setAttribute('class','btn btn-outline-secondary disabled');
                    }
                }
            });
        }
    });



    // CARRITO


    // guardo el botón de checkout
    const checkoutBtn = document.querySelector('#checkout_btn');

    checkoutBtn.onclick = ()=>{
        // remuevo el div de productos del DOM
        divProducts.remove();

        // creo variables y contenido para el total de la compra y el texto de las filas del resumen de compra
        let grandTotal = 0;
        let checkoutBody = "";
        
        cart.forEach(prod=>{
            grandTotal+= prod.qty*prod.price;
            checkoutBody+= 
            `<tr>
                <td>${prod.name}</td>
                <td>${prod.qty}</td>
                <td>${prod.price}€</td>
            </tr>`;
        })

        // modifico el HTML del detalle del carrito al resumen de la compra
        cartDiv.innerHTML = 
        `<div class="card col-sm-10 col-md-6">
            <table class="table">
                <thead class="table-secondary">
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${checkoutBody}
                    <tr>
                        <td colspan="2">El total de tu compra es:</td>
                        <td>${grandTotal}€</td>
                    </tr>
                </tbody>
            </table>
            <p class="text-center px-2 fst-italic">Le enviaremos una confirmación a su correo electrónico cuando el pedido esté listo para ser recogido.</p>
        </div>`;
    }

}












// ACÁ EMPIEZA A INTERACTUAR EL USUARIO CON EL SITIO
// busco si existe info de usuario
const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
// console.log(storedUserInfo);


// si existe, recibo al cliente con un alert
if(storedUserInfo){
    Swal.fire({
        title: `Bienvenido/a ${storedUserInfo.name} ${storedUserInfo.surname}`,
        showDenyButton: true,
        confirmButtonText: 'Comenzar',
        denyButtonText: `No soy ${storedUserInfo.name}`,
        text: '¡Que bueno volver a verte!',
        allowOutsideClick: false,
        allowEscapeKey: false,

        }).then((result) => {
        if (result.isConfirmed){
            // si el usuario confirma ser el guardado en storage se carga el menu
            Menu();
        } else if (result.isDenied){
            // si el usuario es otro se borra el storage y carga el formulario para ingresar
            localStorage.removeItem('userInfo');
            Form();
        }
    })
} else{
    // si no existen datos de cliente en el storage, genero formulario de ingreso
    Form();
}