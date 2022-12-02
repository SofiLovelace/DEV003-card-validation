import validator from './validator.js';

const input = document.getElementById ("card");  // creamos una constante que almacene al objeto con id="card"
let numbersConcataned = ""
validator.maskify(input, numbersConcataned);

console.log(validator.isValid("5529931622059431"));
const button = document.getElementById ("button");

/*const button = document.getElementById ("button");  // creamos una constante que almacene al objeto con id="button"
//creamos un
function click(numbersConcataned){
validator.isValid(numbersConcataned)
}
button.addEventListener("click", click(numbersConcataned));*/