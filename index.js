import validator from './validator.js';
let numbersConcataned = ""
const button = document.getElementById ("button");  //creamos una variable que almacene al objeto button
button.addEventListener("click", function(event){  
  event.preventDefault(); //evitamos la acción por defecto
  const month = document.getElementById ("expirationMonth").value;
  const year =  document.getElementById ("expirationYear").value;
  const cvv = document.getElementById ("cvv").value;
  const name = document.getElementById ("headline").value;
  if (name.length + cvv.length + year.length + month.length > 7) {
    if (numbersConcataned.length === 16) {    //condicionamos la ejecución de is valid a 16 caracteres en el input
      if (validator.isValid(numbersConcataned) === true){
        alert ("Tu tarjeta es valida tu compra se esta procesando");
      }
      else {
        alert ("Ingresa una tarjeta valida para continuar");
      }}
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
  event.preventDefault(); //con este metodo detenemos el evento del teclado
  if(event.key === "Backspace"){ ////creamos este primer if, para que podamos borrar elementos
    numbersConcataned = numbersConcataned.slice (0, -1); //recortamos
  } 
  if (numbersConcataned.length <= 15) {
    const numbersValid = "0123456789"; // declaramos los numeros validos
    if(numbersValid.indexOf(event.key) !== -1){
      numbersConcataned = numbersConcataned + event.key;//vamos concatenando los numeros
    } 
  } else {
    alert ("Solo puedes ingresar 16 digitos")
  }
  input.value = validator.maskify(numbersConcataned);//ingresamos en el input el return de maskify
}); 