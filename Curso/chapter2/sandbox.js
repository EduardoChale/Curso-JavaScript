//------------------------------------
//Clase 1
//Inicio
//alert('hello world');
console.log(100);
console.log('great test');
//Final
//------------------------------------

//------------------------------------
//Clase 2
//Inicio
let edad = 55;
let año=2020;
console.log(edad,año);

edad=65;
console.log(edad);

const puntos=133;
//puntos=90;
console.log(puntos);

var puntuacion = 80;
console.log(puntuacion);

let miEdad = 20;
//Final
//------------------------------------

//------------------------------------
//Clase 3
//Inicio
//strings
console.log('Hola, mundo');
let email = 'email de prueba';
console.log(email);

//concatenacion de strings
let primerNom = 'Eduardo';
let apellido =' Chale';

let nombreCom = primerNom + ' ' + apellido;
console.log(nombreCom);

//Obteniendo caracteres
console.log(nombreCom[5]);

//Largo de string
console.log(nombreCom.length);

//metodos de string
console.log(nombreCom.toLowerCase());
let resultado = nombreCom.toUpperCase();
console.log(resultado,nombreCom);

let indice=email.indexOf('m');
console.log(indice);
//Final
//------------------------------------

//------------------------------------
//Clase 4
//Inicio

//metodos comunes de strings

let email2 = 'segundo email de prueba';
let resultado2=email2.lastIndexOf('g');
console.log(resultado2);

let resultado3=email2.slice(0,12);
console.log(resultado3);

let resultado4 =email2.substr(5,11);
console.log(resultado4);

let resultado5 =email2.replace('g','t');
console.log(resultado5);

//Final
//------------------------------------

//------------------------------------
//Clase5
//Inicio
let radio = 12;
const pi=3.1415;
console.log(radio,pi);

//Operaciones matematicas(+ - * / ** %)
console.log(22/2);
let resultado6 = radio % 3;

console.log(resultado6);

let resultado7= pi*radio**2;
console.log(resultado7);

//Orden de operaciones -BIDMAS

let resultado8=6 * (22-4)**3;
console.log(resultado8);

let likes1 = 30;
likes1= likes1 +1;

console.log(likes1);

likes1++;
console.log(likes1);

likes1--;
console.log(likes1);

likes1+=12;
console.log(likes1);

likes1-=22;
console.log(likes1);

likes1*=4;
console.log(likes1);

likes1/=3;
console.log(likes1);

//NAN

console.log(5*'ff');
let resultado9='el blog tiene '+ likes1 + ' likes';
console.log(resultado9);

//Final
//------------------------------------

//------------------------------------
//Clase 6
//Inicio

//template strings
const titulo = 'Mejores lecturas del 2019';
const autor = 'Adrian';
const likes2= 399;

//modo de concatenacion
let resultado10 ='el blog llamado ' + titulo + ' por ' + autor +' tiene '+ likes2 + ' likes';
console.log(resultado10);

//template string way
let resultado11 = `El blog llamado ${titulo} por ${autor} tiene ${likes2} likes`;
console.log(resultado11);

//creating html templates 
let html =`
<h2>${titulo}</h2>
<p>By ${autor}</p>
<span>Este Blog tiene ${likes2} likes</span>
`;
console.log(html);
//Final
//------------------------------------

//------------------------------------
//Clase 7
//Inicio

//Arrays
let muestras =['Adrian', 'Armando','Juan'];
console.log(muestras);
console.log(muestras[0]);
muestras[1]='Eduardo';
console.log(muestras[1]);

let edades =[24,22,34,50]
console.log(edades[1]);
let aleatorio = ['Luis', 'William', 34, 220]
console.log(aleatorio);


console.log(muestras.length);

//array methods
let resultado12 =muestras.join(', ');
console.log(resultado12);
let resultado13 =muestras.indexOf('Juan');
console.log(resultado13);
let resultado14 = muestras.concat(['sheila', 'jhoedy']);
console.log(resultado14);
let resultado15=muestras.push('Caballero');
console.log(muestras);
resultado16 =muestras.pop();
console.log(muestras);
//Final
//------------------------------------

//------------------------------------
//Clase 8
//Inicio

//null and undefined
let edad2=null;
console.log(edad2, edad2+6, `La edad es ${edad2}`);

//boolean
//boolean & comparisons
console.log(true,false, "true", "false");

// metodos que tienen como resultado booleans
let email3 ='tercer email de prueba';
let nombres =['Adrian', 'Armando', 'Juan']
let resultado17 = email3.includes('i');
let resultado18 =nombres.includes ('Adrian');

console.log(resultado17);
console.log(resultado18);

//comparison operators
let edad3 = 21;
console.log(edad3==21);
console.log(edad3==30);
console.log(edad3!=30);
console.log(edad3!=21);
console.log(edad3>20);
console.log(edad3<20);
console.log(edad3<=21);
console.log(edad3>=21);

let nombre1 ='Adrian';
console.log(nombre1=='Adrian');
console.log(nombre1=='Armando');
console.log(nombre1>'Armando');
console.log(nombre1>'Adrian');
console.log(nombre1>'Juan');

//Final
//------------------------------------

//------------------------------------
//Clase 9
//Inicio

let edad4=20;
//loose comparison (differet types can still be equal)
console.log(edad4==20);
console.log(edad4=='20');

console.log(edad4!=20);
console.log(edad4!='20');

//strict comparison (different types cannot be equal)
console.log(edad4===20);
console.log(edad4==='20');
console.log(edad4!==20);
console.log(edad!=='20');

//Final
//------------------------------------

//------------------------------------
//Clase 10
//Inicio 


//type conversion
let puntuacion2='100';
puntuacion2=Number(puntuacion2);
console.log(puntuacion2+1);
console.log(typeof puntuacion2);

let resultado19=Number('hello');
console.log(resultado19);
resultado19=String(50);
console.log(resultado19);
resultado19=Boolean(0);
console.log(resultado19);
resultado19=Boolean('');
console.log(resultado19,typeof resultado19);

//Final
//------------------------------------