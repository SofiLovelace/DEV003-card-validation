const validator = {
  isValid:function(numberCard){
    let result = 0;     //Creamos una variable numerica para almacenar el resultado "result"
    let resultLuhn = "";  //Creamos una variable que almacene los valores para resolver el algoritmo de luhn
    let resultMulti = ""; // // Crear una variable llamada resultMulti
    for (let i=0; i < numberCard.length; i ++) {
    // //  Aplicamos resultMulti = valor del indice actual
      if (i % 2 === 0){
        resultMulti = Number(numberCard.substring(i, i + 1)) * 2;
      // // // Aplicamos un condicional si resultMulti>= 10, entonces aplicamos una suma de sus digitos
      } else {
        resultMulti = Number(numberCard.substring(i,i + 1));
      // // Siempre y cuando el indice divido entre 2 arrojo como modulo 0 entonces multiplicamos por 2, almacenamos el valor en la variable resultMulti
      }
      if (resultMulti >= 10) { 
        resultMulti = ((resultMulti-(resultMulti % 10)) / 10) + (resultMulti % 10);
      } 
      // // Concatenamos en resultLuhn los valores de resultMulti en cada iteracion
      resultLuhn = resultLuhn + resultMulti;
    }
    // con un ciclo flor recorremos result luhn y sumamos todos los digitos, almacenamos el valor en result
    for (let i = 0; i < resultLuhn.length; i ++) {
      result = result + Number(resultLuhn.substring(i,i + 1));
      console.log(result);
      //obtenemos el modulo de resul, si el valor es cero la tarjeta es valida
    }
    if (result % 10 === 0){
      alert ("tu tarjeta es valida ");
    } else {
      alert ("tu tarjeta es invalida");
    }
    return result
  },
  
  maskify:function(numbersConcataned, event, objectListener){
    const numbersValid = "0123456789";
    if(numbersValid.indexOf(event.key) !== -1){numbersConcataned = numbersConcataned + event.key;//vamos concatenando los numeros
      event.preventDefault(); //con este metodo detenemos el evento del teclado
    } else {
      if(event.key === "Backspace"){ ////creamos este primer if, para que podamos borrar elementos
        numbersConcataned = numbersConcataned.slice (0, -1); //recortamos
        event.preventDefault(); //con este metodo detenemos el evento del teclado
      } else {
        alert("Solo puedes ingresar digitos");
        event.preventDefault(); //con este metodo detenemos el evento del teclado
      }}
    // condicionales para crear la mascara 
    if (numbersConcataned.length <= 4){
      objectListener.value = numbersConcataned;
    } else {
      if (numbersConcataned.length >= 17){
        numbersConcataned = numbersConcataned.slice (0, -1); //recortamos el digito excedente
        alert("Solo se permiten 16 digitos como maximo");
      } else {
        let mascara = numbersConcataned.slice(0,-4);  //variable para almacenar los valores a enmascarar
        let visibility = numbersConcataned.slice(numbersConcataned.length - 4, numbersConcataned.length + 1); // variable para almacenar los numeros que dejaremos visibles
        let remplazados = ""//variable en donde remplazaremos los numeros por *
        for (let i = 1; i <= mascara.length; i ++) { //ciclo for para crear el string con puros * de acuerdo al length de mascara
          remplazados = remplazados + "*"
        }
        objectListener.value = remplazados + visibility;//ingresamos en el imput la mascara y los numeros visibles
      }
    }
    console.log(numbersConcataned);
    return numbersConcataned
  }
};
export default validator;
