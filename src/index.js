import validator from './validator.js';


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

    
    // condicionales para crear la mascara 
    if (numbersConcataned.length <= 4){
        input.value = numbersConcataned;
    } else {
        if (numbersConcataned.length >= 17){
            numbersConcataned = numbersConcataned.slice (0, -1); //recortamos el digito excedente
            alert("Solo se permiten 16 digitos como maximo");
        } else {
            let mascara = numbersConcataned.slice(0,-4);  //variable para almacenar los valores a enmascarar
            let visibility = numbersConcataned.slice(numbersConcataned.length - 4, numbersConcataned.length + 1); // variable para almacenar los numeros que dejaremos visibles
            console.log(mascara);
            console.log(visibility);
            let remplazados = ""//variable en donde remplazaremos los numeros por *
            for (let i = 1; i <= mascara.length; i ++) { //ciclo for para crear el string con puros * de acuerdo al length de mascara
                remplazados = remplazados + "*"
            }
        console.log(remplazados);
        input.value = remplazados + visibility;//ingresamos en el imput la mascara y los numeros visibles
        }
    }
    })
    
    console.log(validator.isValid("5529931622059431"));

/*const button = document.getElementById ("button");  // creamos una constante que almacene al objeto con id="button"
//creamos un
function click(numbersConcataned){
validator.isValid(numbersConcataned)
}
button.addEventListener("click", click(numbersConcataned));*/