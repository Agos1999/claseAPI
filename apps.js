// APLICATION PROGRAMING INTERFACE
// HTTP => protocolo de transferencia

//sector de variables
const section1= document.getElementById("section1"); //variable local 
const boton= document.getElementById("boton")


//VAMOS A SOLICITAR LA API
function api(){
    fetch ("https://rickandmortyapi.com/api/character") //solicitando la informacion de la API
    //fetch ya tiene incorporado el metodo get 
  
    .then(response => response.json()) // es como decir entonces

    //ejemplo de JSON: un objeto que no lo reconoce js
    //transformar en un objeto literal que reconozca js
    .then(data => mostrarDatos(data.results))
     
};


function mostrarDatos(personajes){ //personajes hara referencia a mi objeto de personajes
//recorrer objeto => FOR
 for(const personaje of personajes){
   // console.log(personaje.name);
  section1.innerHTML += `<div><p>${personaje.name}</p>

  <img scr="${personaje.image}"/>
  </div>`
  // muestra las imagenes de cada personaje


 } //hay que pasar esta funcion a la data
};

boton.addEventListener("click",api);

api();
//______________----------------------------------------------
//repaso scope
let variableGlobal = "soy una variable global"; //si quiero acceder a una local no se puede acceder a let

function Ejemplo (){ //desde la funcion puedo acceder a todo lo que es global
    let variableLocal = "soy local";
    console.log(variableGlobal);
    console.log(variableLocal);
};
