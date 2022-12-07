import validator from './validator.js';
let numbersConcataned = ""

const button = document.getElementById ("button");  //creamos una variable que almacene al objeto button

button.addEventListener("click", function(event){  
  //escuchamos los eventos click sobre el botton
  event.preventDefault(); //evitamos la acción por defecto
  const month = document.getElementById ("expirationMonth").value;
  const year =  document.getElementById ("expirationYear").value;
  const cvv = document.getElementById ("cvv").value;
  const totalLength = month.length + year.length + cvv.length;
  console.log(totalLength);
  if (totalLength === 7) {
    if (numbersConcataned.length === 16) {    //condicionamos la ejecución de is valid a 16 caracteres en el input
    
      if (validator.isValid(numbersConcataned) === true){
        alert ("Tu tarjeta es valida tu compra se esta procesando");
      }
      else {
        alert ("Ingresa una tarjeta valida para continuar");
      }
      
    }
    else {
      alert ("Ingresa los 16 digitos de tu plastico");    //si la condicion no se cumple
    } 
  }
  else {
    alert ("Ingresa todos los datos");
  }
})

const input = document.getElementById ("card");  // creamos una constante que almacene al objeto con id="card"
input.addEventListener("keydown", function(event){ //escuchamos los eventos del teclado sobre card
  if(event.key === "Backspace"){ ////creamos este primer if, para que podamos borrar elementos
    numbersConcataned = numbersConcataned.slice (0, -1); //recortamos
    event.preventDefault(); //con este metodo detenemos el evento del teclado
  } 
  if (numbersConcataned.length <= 15) {
    const numbersValid = "0123456789"; // declaramos los numeros validos
    if(numbersValid.indexOf(event.key) !== -1){
      numbersConcataned = numbersConcataned + event.key;//vamos concatenando los numeros
      event.preventDefault(); //con este metodo detenemos el evento del teclado
    } 
    else {
      event.preventDefault(); //con este metodo detenemos el evento del teclado
    }
    input.value = validator.maskify(numbersConcataned);//ingresamos en el input el return de maskify
  } else {
    event.preventDefault();
    input.value = validator.maskify(numbersConcataned);
    alert ("Solo puedes ingresar 16 digitos")
  }
}); 