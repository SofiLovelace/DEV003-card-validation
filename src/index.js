import validator from './validator.js';
let numbersConcataned = ""

const input = document.getElementById ("card");  // creamos una constante que almacene al objeto con id="card"
input.addEventListener("keydown", function(event){ //escuchamos los eventos del teclado sobre card
  const eventKeyboard = event //almacenamos los valores del evento
  numbersConcataned = validator.maskify(numbersConcataned, eventKeyboard, input); //almacenamos en numbersC... el return de maskify
}); 

const button = document.getElementById ("button");  //creamos una variable que almacene al objeto button
button.addEventListener("click", function(event){  //escuchamos los eventos click sobre el botton
  event.preventDefault(); //evitamos la acción por defecto
  if (numbersConcataned.length === 16) {    //condicionamos la ejecución de is valid a 16 caracteres en el input
    validator.isValid(numbersConcataned); //ejecutamos is valid sobre los numeros previamente concatenados 
  }
  else {
    alert ("Ingresa los 16 digitos de tu plastico");    //si la condicion no se cumple
  }
})
