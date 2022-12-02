const validator = {
  isValid:function(numberCard){
    //Crear una variable para almacenar el resultado "result"
    let result = 0;
    // // Crear una variable que almacene strings llamada resultLuhn = ""
    let resultLuhn = "";
    //De acuerdo al indice de la tarjeta comenzando desde el indice 0 crear un ciclo for que itere sobre los elementos de la tarjeta
    // // Crear una variable llamada resultMulti
    let resultMulti = "";
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
      //obtenemos el modulo de resul, si el valor es cero la tarjeta es valida
    }
    if (result % 10 === 0){
      console.log ("tu tarjeta es valida ");
    } else {
      console.log ("tu tarjeta es invalida");
    }
    console.log(result);
    return resultLuhn;


// // Aplicamos un nuevo ciclo for, iteramos sobre la variable resultLuhn
// // En cada iteración sumar los valores del indice a la variable result
// // for (let i = 0; i < resultLuhn.length; i ++) {
// // result = result + Number(resultLuhn.substring(i,i + 1))
// // 
// Obtener el modulo de "result"/10, si es igual a 0 la tarjeta es valida d
  },
  maskify:function(numbers){
    console.log("este es el metodo de maskify")
    
  }
};
export default validator;
