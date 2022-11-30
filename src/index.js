import validator from './validator.js';

console.log(validator.maskify);

const input = document.getElementById ("card");  // creamos una constante que almacene al objeto con id="card"

const numbersValid = "0123456789"
let numbersConcataned =""
input.addEventListener("keydown", function(event) { // usamos sobre input una escucha de cualquier tecla que presionemos, esta tecla es el evento definido en la funcion con el parametro event 
    if(numbersValid.indexOf(event.key) !== -1){
        numbersConcataned = numbersConcataned + event.key;//vamos concatenando los numeros
        console.log(numbersConcataned);
        event.preventDefault(); //con este metodo detenemos el evento del teclado
    } else {
        if(event.key === "Backspace"){ ////creamos este primer if, para que podamos borrar elementos
            console.log("retroceso");
            numbersConcataned = numbersConcataned.slice (0, -1); //recortamos
            console.log(numbersConcataned);
            event.preventDefault(); //con este metodo detenemos el evento del teclado
        } else {
            alert("Solo puedes ingresar digitos");
            event.preventDefault(); //con este metodo detenemos el evento del teclado
        }}
    console.log(numbersConcataned.length); /// mascara
    if (numbersConcataned.length <= 4){
        input.value = numbersConcataned;
    } else {
        if (numbersConcataned.length >= 17){
            numbersConcataned = numbersConcataned.slice (0, -1); //recortamos el digito excedente
            alert("Solo se permiten 16 digitos como maximo");
            console.log(numbersConcataned); //imprimos de nuevo por que la linea 24 al estar antes se imprime antes de este recorte
        } else {
            let mascara = numbersConcataned.slice(0,-4);
            let visibility = numbersConcataned.slice(numbersConcataned.length - 4, numbersConcataned.length + 1);
        
            console.log(mascara);
            console.log(visibility);
            let remplazados = ""
            for (let i = 1; i <= mascara.length; i ++) {
                remplazados = remplazados + "*"
            }
        console.log(remplazados);
        input.value = remplazados + visibility;
        }
    }
    })