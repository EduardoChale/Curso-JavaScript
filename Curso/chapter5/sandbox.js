//---------------------------------
//Clase 1 y Clase 2
//Inicio

//object literals
let usuario = {
    nombre: 'Adrian',
    edad:30,
    email: 'eduardochale88@gmail.com',
    ubicacion:'Mexico',
    blogs: [
        {titulo:'Titulo de blog 1', likes: 550}, 
        {titulo: 'Titulo de blog 2', likes:30}],
    inicio(){
        console.log('El usuario inicio sesion');
    },
    cierre(){
        console.log('El usuario cerro sesion');
    },
    logBlogs(){
        //console.log(this.blogs);
        console.log('Este usuario escribio los siguuientes blogs: ');
        this.blogs.forEach(blog=>{console.log(blog.titulo,blog.likes);
        })
    }
};

console.log(usuario);
console.log(usuario.nombre);

//user.age=35;
console.log(usuario.edad);

const key='ubicacion';

console.log(usuario['ubicacion']);
usuario['nombre']='Armando';
console.log(usuario['nombre']);

console.log(typeof usuario);

usuario.inicio();
usuario.cierre();

usuario.logBlogs();
console.log(this);

//Fin
//---------------------------------

//---------------------------------
//Clase 3
//Inicio


//Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);



const area=7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random numbers

const aleatorio=Math.random();
console.log(aleatorio);
console.log(Math.round(aleatorio*100));

//Fin
//---------------------------------

//---------------------------------
//Clase 4
//Inicio
let puntuacion1= 40;
let puntuacion2 =puntuacion1;

console.log(`puntuacion1: ${puntuacion1} `, `puntuacion2: ${puntuacion2} `);
puntuacion1=1000;
console.log(`puntuacion1: ${puntuacion1} `, `puntuacion2: ${puntuacion2} `);


const usuario1= {name: 'Armando', edad: 20};
const usuario2= usuario1;

console.log(usuario1,usuario2);

usuario1.age=33;
console.log(usuario1,usuario2);

//Fin
//---------------------------------

