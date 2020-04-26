//---------------------------------
//Clase 1
//Inicio

//for loops

for(let i=0;i<5;i++){
    console.log('ciclo for:',i);
}
console.log('ciclo terminado');

const nombres=['Adrian','Armando','Juan'];

for(let i=0;i< nombres.length;i++){
    console.log(nombres[i]);
    let codigo=`<div>${nombres[i]}</div>`;
    console.log(codigo);
}

//Fin
//---------------------------------

//---------------------------------
//Clase 2
//Inicio


//while loops
let i=0;
while (i<5){
    console.log('loop while: ', i);
    i++;
}

const nombres2 =['Armando', 'Adrian', 'Juan'];
 i = 0;
while(i<nombres2.length){
    console.log(nombres2[i]);
    i++;
}

//Fin
//---------------------------------

//---------------------------------
//Clase 3
//Inicio

//do while loop
 i=4;
do{
    console.log('El valor de i es: ',i);
    i++;

}while(i<5);
//Fin
//---------------------------------

//---------------------------------
//Clase 4
//Inicio

//if else statements
const edad=25;
if(edad>30){
    console.log('Tienes mas de 30 años')
}

const nombres3=['Adrian','Armando', 'Sheila', 'Jhoedy'];

if(nombres3.length >= 4){
    console.log("Son muchos nombres");
}


const contraseña1='contraseñ@123';
if(contraseña1.length >=12){
    console.log('La contraseña es lo suficentemente larga');
}
//Fin
//---------------------------------

//---------------------------------
//Clase 5
//Inicio

if(contraseña1.length>=12){
    console.log('La contraseña es muy fuerte')
}else if(contraseña1.length>=8){

    console.log('La contraseña es lo suficientemente larga!');

}else{
    console.log('La contraseña no es lo sufcientemente larga');
}
//Fin 
//---------------------------------

//---------------------------------
//Clase 6
//Inicio

//logical operators OR || and AND &&

const contraseña2='contaseñ@';
if(contraseña2.length>=12 && contraseña2.includes('@')){
    console.log('La contraseña es increiblemente fuerte')

}else if(contraseña2.length>=8 || contraseña2.includes('@') && contraseña2.length >= 5){

    console.log('La contraseña es lo suficientemente fuerte!');

}else{
    console.log('La contraseña no es lo sufcientemente fuerte');
}
//Fin
//---------------------------------

//---------------------------------
//Clase 7
//Inicio

//logical not
let usuario = false;

if(!usuario){
    console.log('debes haber iniciado sesion primero');
}

console.log(!true);
console.log(!false);
//Fin
//---------------------------------

//---------------------------------
//Clase 8
//Inicio

//break and continue

const puntuacion=[50,25,0,30,100,20,10];
for(let i=0; i<puntuacion.length;i++){
    
    if(puntuacion[i]===0){
        continue;
    }

    console.log('Tu puntuacion es: ', puntuacion[i]);
    
    if(puntuacion[i]===100){
        console.log('Felicitaciones obtuviste la maxiama puntuacion!');
       break;
    }
}
//Fin
//---------------------------------

//---------------------------------
//Clase 9
//Inicio

//switch statements

const calif='A';

switch (calif){
    case 'A': 
        console.log('Obtuviste una A!');
    break;
        case 'B': 
        console.log('Obtuviste una B');
    break;
        case 'C': 
        console.log('Obtuviste una C');
    case 'D': 
        console.log('Obtuviste una D');
    break;
        case 'E': 
        console.log('Obtuviste una E');
    break;
    default:
        console.log('No es una calificacion aprobatoria');
}

//Fin
//---------------------------------

//---------------------------------
//Clase 10
//Inicio

//variables & block level scope
const edad2=30;
const nombre4='James';
if(true){
    const edad2=40;
    let nombre4='ADrian';
    console.log('Dentro del primer bloque', edad2, nombre4);
    if(true){
        const edad2=50;
        console.log('Dentro del segundo bloque: ',edad2, nombre4 );
    }
}

console.log('Fuera del bloque', edad2, nombre4);

//Fin 
//---------------------------------