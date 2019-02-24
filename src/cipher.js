const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");
const textoDecifrado = document.getElementById("decodificado");

//Encode
function decode (string, offset) {
  /* Acá va tu código */

  const textoIngresado = texto.value;
  textoCifrado.value = textoIngresado.split('').map(x=>{
    let mayus = (x === x.toUpperCase()) ? true : false;
    let valorEntero = x.toLowerCase().charCodeAt(0);
    if(valorEntero >= 97 && valorEntero <= 122)
      {
        const offset = parseInt(desplazamiento.value);
        if(valorEntero + offset > 122)
          valorEntero = 97 + (valorEntero - 122) + offset - 1;
        else
          valorEntero = valorEntero + offset;
      }
      let cifrado = String.fromCharCode(valorEntero);
      return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
}  

texto.addEventListener("keyup",decode);
desplazamiento.addEventListener("change", decode); 

//Decode
    
function encode (string, offset) {
  /* Acá va tu código */
  
  const textoIngresado = texto.value;
  textoDecifrado.value = textoIngresado.split('').map(y=>{ //Separar palabras
    let mayus = (y === y.toUpperCase()) ? true : false;//Devuelve el valor en Mayuscula
    let valorEntero = y.toLowerCase().charCodeAt(0); //Devuelve el valor en Minuscula
    if(valorEntero <= 96 && valorEntero <= 123)
      {
        const offset = parseInt(desplazamiento.value);
        if(valorEntero + offset < 123)
          valorEntero = 96 + (valorEntero - 123) + offset - 1;
        else
          valorEntero = valorEntero + offset;
      }
      let decodificado = String.fromCharCode(valorEntero);
      return mayus ? decodificado.toUpperCase() : decodificado;
    }).join('');
}
texto.addEventListener("keyup",encode);
desplazamiento.addEventListener("change", encode); 