const validator = {
  isValid:function(numberCard){
    let result = 0;     //Creamos una variable numerica para almacenar el resultado "result"
    let resultLuhn = "";  //Creamos una variable que almacene los valores para resolver el algoritmo de luhn
    let resultMulti = ""; // // Crear una variable llamada resultMulti
    for (let i=0; i < Number(numberCard.length); i ++) {
    
      if (i % 2 === 0){
        resultMulti = Number(numberCard.substring(i, i + 1)) * 2;
      } else {
        resultMulti = Number(numberCard.substring(i,i + 1));
      }
      if (resultMulti >= 10) { 
        resultMulti = ((resultMulti-(resultMulti % 10)) / 10) + (resultMulti % 10);
      } 
      resultLuhn = resultLuhn + resultMulti;
    }
    for (let i = 0; i < resultLuhn.length; i ++) {
      result = result + Number(resultLuhn.substring(i,i + 1));
    }
    return result % 10 === 0;
  },
  
  maskify:function(numbersConcataned){
    let maskAply = "" // variable para almacenar el valor final
    if (numbersConcataned.length <= 4){ // condicionales para crear la mascara 
      maskAply = numbersConcataned;
    } else{
      const mascara = numbersConcataned.slice(0,-4);  //variable para almacenar los valores a enmascarar
      const visibility = numbersConcataned.slice(numbersConcataned.length - 4, numbersConcataned.length + 1); // variable para almacenar los numeros que dejaremos visibles
      let remplazados = ""//variable en donde remplazaremos los numeros por *
      for (let i = 1; i <= mascara.length; i ++) { //ciclo for para crear el string con puros * de acuerdo al length de mascara
        remplazados = remplazados + "#"
      }
      maskAply = remplazados + visibility
    }
    return maskAply
  }};
export default validator;
