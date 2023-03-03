// asi se hacen comentarios

// Variables posibles: var - let - const

// var primeraVariable = 'hola'; // string: cadena de texto
// var segundaVariable = 5; // número

/* CLASE 1
var primera = 5;
let segunda = 10;

{
    var tercera = 15;
    let cuarta = 20;
    console.log(cuarta);
}

console.log(tercera);



// let vs const

let contador = 0;

contador = 1;
contador = 2;
console.log(contador);


const string1 = 'Hola'
const string2 = 'como estas'
const string3 = '?'

console.log(string1+" "+string2+string3);

const nombreUsuario =prompt('ingresa tu nombre')
alert('bienvenido '+nombreUsuario)

console.log(nombreUsuario)*/




















// CLASE 2


//parseInt -> de texto a número

// const numero1 = parseInt(prompt('ingresa un numero'))
// const numero2 = parseInt(prompt('ingresa otro numero'))
// const resultado = numero1 + numero2
// alert ('el resultado de la suma de los dos numeros es: '+resultado)

// Si - mañana no llueve -> vamos a la playa
// if (mañana no llueve) {vamos a la playa}
// if(condicion){
//     bloque de código a ejecutar si la condición se resuelve como verdadera
// }

// const numero1 = parseInt(prompt('ingresa un numero'))
// const numero2 = parseInt(prompt('ingresa otro numero'))

// if(numero1 === 0){
//     alert('no podemos seguir el proceso')
// } else {
//     alert('podemos continuar')
// }

/*// calculadora
const operacion = prompt('que operación deseas hacer? suma - resta - mult - div')
// suma - resta - mult - div

let resultado

if(operacion === 'suma'){
    resultado = numero1 + numero2
    alert('el resultado es: '+resultado)
} else if(operacion === 'resta'){
    resultado = numero1 - numero2
    alert('el resultado es: '+resultado)
} else if(operacion === 'mult'){
    resultado = numero1 * numero2
    alert('el resultado es: '+resultado)
} else if(operacion === 'div'){
    resultado = numero1 / numero2
    alert('el resultado es: '+resultado)
} else{
    alert('operacion no válida')
}*/


/*if(numero1 === 0 && numero2 === 0){
    alert('los dos números son iguales a cero')
} else if(numero1 === 0 || numero2 === 0){
    alert('alguno de los números es igual a cero')
} else if(numero1<=10 && numero2<=10){
    alert('ambos numeros menores o iguales a 10')
} else if((numero1>10 && numero1<=20) && (numero2>10 && numero2<=20)){
    alert('ambos numeros mayores a 10 y menores o iguales a 20')
}*/




/*//ejercicio
const numeroEj = parseInt(prompt('Ingrese su DNI argentino (solo números'));

if(numeroEj>=10000000 && numeroEj<100000000){
    alert('DNI ingresado correctamente. Su DNI es: '+numeroEj);
} else if(numeroEj<100000000){
    alert('Error: faltan dígitos');
} else if(numeroEj>=100000000){
    alert('Error: sobran dígitos');
} else {
    alert('Error: ingrése únicamente números. No se aceptan letras, puntos ni símbolos.');
}*/




// BUCLE for

// for(let i = 1;i<10;i=i+1){
//     //bloque de código que yo quiera que se ejecute n veces
// }

// const numero = parseInt(prompt('Ingrese un número'))

//     for(let i = 1; i<=numero; i++){
//         if(i===4){
//             // console.log('Se acabó el ciclo')
//             // break
//             continue
//         }
//         console.log(i)
//     }




// // BUCLE while
// let nombre = prompt('Ingresa tu nombre').toLowerCase();
// while(nombre !== 'jorge'){
//     alert('Bienvenido '+nombre);
//     nombre = prompt('Ingresa tu nombre').toLowerCase();
// }




// SWITCH

// const numero1 = parseInt(prompt('ingresa un numero'))
// const numero2 = parseInt(prompt('ingresa otro numero'))

// calculadora con switch
// const operacion = prompt('que operación deseas hacer? suma - resta - mult - div')
// suma - resta - mult - div

// let resultado

// switch(operacion){
//     case'suma':
//         resultado = numero1 + numero2
//         alert('el resultado es: '+resultado)
//         break
//     case'resta':
//         resultado = numero1 - numero2
//         alert('el resultado es: '+resultado)
//         break
//     case'mult':
//         resultado = numero1 * numero2
//         alert('el resultado es: '+resultado)
//         break
//     case'div':
//         resultado = numero1 / numero2
//         alert('el resultado es: '+resultado)
//         break
//     default:
//         alert('operacion no válida')
//         break  
// }




















// CLASE 3

// FUNCIONES


// function sumar(n1,n2){
// // Bloque de código a ejecutar
// const resultado = n1 + n2
// // alert('El resultado de la suma es: '+ resultado)
// return resultado
// }


// o también más corto
// function sumar(n1,n2){
// return n1 + n2
// }
    

// const numero1 = parseInt(prompt('Ingresa un número'))
// const numero2 = parseInt(prompt('Ingresa otro número'))
// const resultadoSumaPrompt = sumar(numero1,numero2)
// alert('El resultado de la suma es: '+resultadoSumaPrompt)


// sumar()
// const resultadoSuma1 = sumar()
// const resultadoSuma2 = sumar()
// alert('El resultado de la suma es: '+resultadoSuma1)
// console.log(resultadoSuma2)


// function menorACien(num){
//     if(num<100){
//         return true
//     } else{
//         return false
//     }
// }

// const resultado = menorACien(100)
// console.log(resultado)

// const numero = parseInt(prompt('Ingresa un número'))
// console.log(menorACien(numero))


// function esVocal(parametro){
//     if(
//         parametro === 'a' || 
//         parametro === 'e' || 
//         parametro === 'i' || 
//         parametro === 'o' || 
//         parametro === 'u'){
//         return true
//     } else{
//         return false
//     }
// }

// console.log(esVocal('i'))
// console.log(esVocal('q'))


// FUNCION FLECHA

// const restar = (n1,n2)=>{
//     return n1-n2
// }

// console.log(restar(13,4))


// O lo mismo y más corto, sin laves y en una linea. 
// Cuando se escribe en una linea sola tienen un return implícito
// Además si recibe un solo parámetro no hacen falta paréntesis al crearla, sí al llamarla

// const restar = (n1,n2) => n1-n2
// console.log(restar(17,4))

// en este caso estamos guardando la función en una variable, es una fundión anónima
// de todos modos, se llaman con el nombre de la variable y () para los parámetros

// const esVocal = parametro => {
//     if(
//         parametro === 'a' || 
//         parametro === 'e' || 
//         parametro === 'i' || 
//         parametro === 'o' || 
//         parametro === 'u'){
//         return true
//     } else{
//         return false
//     }
// }
// console.log(esVocal('x'))


// OBJETOS

// // Hasta el momento creábamos variables de esta forma pero solo nosotros sabíamos
// // que estaban relacionadas
// // Animal 1
// const tipo1 = 'perro'
// const nombre1 = 'firulais'
// const edad1 = 4
// const tieneDueno1 = true

// // Animal 2
// const tipo2 = 'gato'
// const nombre2 = 'mishu'
// const edad2 = 2
// const tieneDueno2 = false

// console.log(tipo1,nombre1,edad1,tieneDueno1)

// const animal1 = {
//     tipo: 'perro',
//     nombre: 'firulais',
//     edad: 4,
//     tieneDueno: true
// }

// const animal2 = {
//     tipo: 'gato',
//     nombre: 'mishu',
//     edad: 2,
//     tieneDueno: false
// }

// console.log(animal1)
// console.log(animal1.tieneDueno)
// console.log(animal1['tieneDueno']) // Esta forma no se suele usar tanto
// console.log(animal1.vivo)

// animal1.vivo = true
// console.log(animal1)

// console.log(`Este animal es un ${animal1.tipo}`) // Con corchetes al reves
// console.log('Este animal es un '+animal1.tipo)

// delete animal1.edad
// console.log(animal1)


// FUNCION CONSTRUCTORA

// function Animal(tipo,nombre,edad,tieneDueno){
//     this.tipo = tipo
//     this.nombre = nombre
//     this.edad = edad
//     this.tieneDueno = tieneDueno
// }

// const animal3 = new Animal('pez','nemo',1,false)
// const animal4 = new Animal('conejo','bunny',2,true)
// const nombreAnimal5 = prompt('Ingresa el nombre del animal')
// const animal5 = new Animal('raton',nombreAnimal5,10,true)
// console.log(animal3.edad)
// console.log(animal4.nombre)
// console.log(animal5)


// CLASES

// class Animal{
//      constructor(tipo,nombre,edad,tieneDueno){
//         this.tipo = tipo
//         this.nombre = nombre
//         this.edad = edad
//         this.tieneDueno = tieneDueno    
//      }

//      esMayorDeEdad(){
//         if(this.edad>=5){
//             return true
//         } else{
//             return false
//         }
//      }
// }

// const animal3 = new Animal('pez','nemo',1,false)
// const animal4 = new Animal('conejo','bunny',2,true)
// console.log(animal4.esMayorDeEdad())
// const nombreAnimal5 = prompt('Ingresa el nombre del animal')
// const animal5 = new Animal('raton',nombreAnimal5,10,true)
// console.log(animal3.edad)
// console.log(animal4.nombre)
// console.log(animal5)

// class Usuario{
//     constructor(nombre,email,password){
//         this.nombre = nombre
//         this.email = email
//         this.password = password
//     }
//     tieneEmail(){
//         if(this.email){
//             return true
//         } else{
//             return false
//         }
//     }
//     // actualizarPassword(newPassword){
//     //     this.password = newPassword
//     // }
//     actualizarPassword(oldPassword,newPassword){
//         if(this.password === oldPassword){
//             this.password = newPassword
//             return 'password actualizada con éxito'
//         } else{
//             return 'no estás habilitado para hacer este cambio'
//         }
//     }
// }

// const usuario1 = new Usuario('Juan','juan@gmail.com','12345')
// const usuario2 = new Usuario('Carolina',null,'abcde')
// const usuario3 = new Usuario('Jorge','jorgito@gmail.com','123abc')
// // usuario1.actualizarPassword('67890')
// // usuario2.actualizarPassword('lina')
// const passwordUsuario3Old = prompt('Ingresa la contraseña actual')
// const passwordUsuario3New = prompt('Ingresa la contraseña nueva')
// usuario1.actualizarPassword('12345','nueva12345')
// usuario2.actualizarPassword('caro','lina')
// console.log(usuario1, usuario2, usuario3)
// console.log(usuario2.tieneEmail())
// const respuesta = usuario3.actualizarPassword(passwordUsuario3Old,passwordUsuario3New)
// alert(respuesta)
// console.log(usuario3)



// PROYECTO FINAL

// Estoy pensando en armar una tienda online para el proyecto que hice en Desarrollo Web, vendiendo prints de las obras de la artista e incluso sus cuadros.
// En su defecto armar una webstore desde cero para aprovechar y practicar un poco mas del lado del desarrillo.
// Por el momento el tema usado para esta preentrega es genérico.

alert('Bienvenido a Juancho Pancho');
const cantPanchos = parseInt(prompt('Para comenzar. \n¿Cuantos panchos va a querer?'));


// // Bebidas

// const bebidas = prompt('¿Los va a querer acompañar con bebidas? \nPor favor indique SI, NO o, en su defecto indique cuantos.').toLowerCase();
// let cantBebidas;
// let bebidasExtra;

// if(bebidas==='si'){
//     cantBebidas = cantPanchos;
// } else if(bebidas==='no'){
//     cantBebidas = 0;
// } else{
//     if(bebidas>=0 && bebidas<=cantPanchos){
//         cantBebidas = parseInt(bebidas);

//     } else if (bebidas>cantPanchos){
//         cantBebidas = cantPanchos;
//         bebidasExtra = bebidas-cantPanchos;
//         alert('No puede llevar más bebidas de acompañamient que la cantidad de panchos indicada. \nDeberá abonar las '+bebidasExtra+' excedentes por separado.');
//     } else{
//         alert('Valor invalido, por favor refresque el sitio y vuelva a intentarlo.');
//     }
// }


// Papas

let papas = prompt('¿Los va a querer acompañar con papas fritas? \nPor favor indique SI o NO:').toLowerCase();
let cantPapas;
let papasExtra;

while(papas!=='si' && papas!=='no'){
        alert('El valor ingresado no es válido, pruebe nuevamente.');
        papas = prompt('¿Los va a querer acompañar con papas fritas? \nPor favor indique SI o NO:').toLowerCase();
}

if(papas==='si'){
    cantPapas = parseInt(prompt('¿Cuantas acompañamientos de papas fritas va a querer?'));
    if(cantPapas>cantPanchos){
        papasExtra = papas-cantPanchos;
        cantPapas = cantPanchos;
        alert('No puede llevar más papas fritas de acompañamiento que la cantidad de panchos indicada. \nDeberá abonar las '+papasExtra+' excedentes por separado.');
    }
} else if(papas==='no'){
    cantPapas = 0;
} 

console.log(cantPanchos);
// console.log(cantBebidas);
console.log(cantPapas);
if(papasExtra>0){
    console.log(papasExtra)
}