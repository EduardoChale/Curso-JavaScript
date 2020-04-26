//-----------------------------
//Clase 1
//Inicio

let parametro=document.querySelector('p');

console.log(parametro);

parametro=document.querySelector('div.primera');

console.log(parametro);

parametro=document.querySelector('body > h1');

console.log(parametro);

let parametros=document.querySelectorAll('p');
console.log(parametros);
console.log(parametros[0]);

parametros.forEach(parametros=>{
    console.log(parametros);
});



let errores=document.querySelectorAll('.primera');


errores.forEach(parametro=>{
    console.log(parametro);
});

console.log(parametros[0]); 
console.log(errores);
//Final

//-----------------------------

//-----------------------------
//Clase 2
//Inicio


//get an element by id
let titulo=document.getElementById('titulo-pagina');
console.log(titulo);
//get elements by their class name
errores=document.getElementsByClassName('primera');
console.log(errores);
console.log(errores[0]);
//get elements by their tag name
parametros=document.getElementsByTagName('p');
console.log(parametros);
console.log(parametros[0]);

//Final
//-----------------------------

//-----------------------------
//Clase 3
//Inicio

parametro= document.querySelector('p');
console.log(parametro.innerText);
parametro.innerText='Prueba  2';

parametros=document.querySelectorAll('p');
parametros.forEach(para=>{
    console.log(para.innerText);
    para.innerText+=' new text';
});
let contenido= document.querySelector('.contenido');
console.log(contenido.innerHTML);
contenido.innerHTML+='<h2> Este es un nuevo H2</h2>';

let personas=['Adrian','Armando','Jhoedy'];

personas.forEach(persona=>{
    contenido.innerHTML+=`<p>${persona}</p>`
});

//Final
//-----------------------------

//-----------------------------
//Clase 4
//Inicio


const link= document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.youtube.com');
link.innerText='Link a youtube';

const mensaje =document.querySelector('p');
console.log(mensaje.getAttribute('class'));
//mensaje.setAttribute('class','logro');
mensaje.setAttribute('style','color:black');
//Final 
//-----------------------------

//-----------------------------
//Clase 5
//Inicio


const titulo2=document.querySelector('h1');

//title.setAttribute('style','margin: 50px;');

console.log(titulo.style);
console.log(titulo.style.color);
titulo2.style.margin='70px';
titulo2.style.color='pink ';
titulo2.style.fontSize ='60px';
titulo2.style.margin='';

//Final
//-----------------------------

//-----------------------------
//Clase 6
//Inicio

contenido = document.querySelector('p');
console.log(contenido.classList);
contenido.classList.add('errors');
contenido.classList.remove('errors');
contenido.classList.remove('error');
contenido.classList.add('success');

parametros=document.querySelectorAll('p');
parametros.forEach(parametro=>{
    
    if(parametro.textContent.includes('success')){
        parametro.classList.add('success');
    }
    if(parametro.textContent.includes('error')){
        parametro.classList.add('error');
    }
    
});
titulo=document.querySelector('.title');
titulo.classList.toggle('test');
titulo.classList.toggle('test');
//final