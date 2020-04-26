//---------------------------------
//Clase 1
//Inicio

//function declaration

function saludo(){
    console.log('Hola!!!!');
}

//function expression
const habla=function(){
    console.log('Buenas noches');
};

saludo();

habla();

//Fin
//---------------------------------

//---------------------------------
//Clase2
//Inicio

//arguments & parameters
const habla2 =function(nombre='Adrian', tiempo='Dia'){
    console.log(`Buen ${tiempo} ${nombre}`);
}

habla2('Armando', 'Tarde');
habla2();
habla2('maze');
//FIn
//---------------------------------

//---------------------------------
//Clase 3
//Inicio

//returning values
const calcArea= function(radio){
    return 3.14*radio**2;
}

const area = calcArea(5);
console.log(area);

//arrow function

const calcArea2=radio=>3.14*radio**2;


const area2 =calcArea2(5);
console.log('Area es: ', area2);

//practice arrow function
const saludo2 = function(){
    return  'Hola mundo';
}
console.log(saludo2());
const saludo3=()=>'Hola Mundo';
console.log(saludo3());


const cuenta= function(productos,impuesto){
    let total=0;
    for(let i=0; i< productos.length; i++){
        total+= productos[i] + productos[i]* impuesto;
    }
    return total;
}

console.log(cuenta([19,153,32],0.2));

const cuenta2=(productos, impuesto)=>{
    let total=0;
    for(let i=0; i< productos.length; i++){
        total+= productos[i] + productos[i]* impuesto;
    }
    return total;
};

console.log(cuenta2([12,153,45],0.3));
//Fin
//---------------------------------

//---------------------------------
//Clase 4
//Inicio


const name='Adrian';
//functions

const saludo4=()=>'hola';

let resultado1=saludo4();
console.log(resultado1);

//methods
let resultado2=name.toUpperCase();
console.log(resultado2);

//Fin
//---------------------------------

//---------------------------------
//Clase 5
//Inicio

//callbacks & foreach

const miFunc = (llamadaFunc)=>{
    //do something
    let valor=50;
    llamadaFunc(valor);
};

miFunc(valor=>{
    //do something
    console.log(valor);
});

let gente=['Adrian','Armando','Sheila','Jhoedy','Luis'];

gente.forEach((persona, indice)=>{
    console.log(indice, persona);
});

const logPerson= (persona, indice)=>{
    console.log(`${indice}- hola ${persona}`)
}

gente.forEach(logPerson);

//Fin
//---------------------------------

//---------------------------------
//Clase6
//Inicio

const ul = document.querySelector('.gente2');

const gente2=['Adrian', 'Armando', 'Sheila', 'Jhoedy','Luis'];

let html=``;

gente2.forEach(persona=>{
    //create html template
    html+= `<li style="color: purple"> ${persona}</li>`;
});



console.log(html);
ul.innerHTML = html;

//Fin
//---------------------------------