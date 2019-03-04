window.cipher = {
    encode: (string, offset) => {
        let cipher = ""; //texto recibido
        for (let i = 0; i < string.length; i++) { //inicio recorrido de caracteres
            let letterE = string[i];
            if (letterE.match(/[a-z]/i)) { //identificacion de espacios vacios 
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) { //Devuelve un valor unicode
                    let textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65; //Mayusculas
                    cipher += String.fromCharCode(textChar);
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) { //Minusculas
                    let textChar = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
                    cipher += String.fromCharCode(textChar); //Devuelve una cadena creada en unicode
                }
                } else {
                cipher += letterE;
            }
        }
        return cipher; //retornar respuesta
    },
    decode: (string, offset) => {
        let decipher = ""; //texto recibido
        for (let i = 0; i < string.length; i++) { //inicio recorrido de caracteres
            let letterD = string[i];
            if (letterD.match(/[a-z]/i)) { //identificacion de espacios vacios 
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) { //Devuelve un valor unicode
                    let textChar = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;//Mayusculas
                    decipher += String.fromCharCode(textChar);
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) { //Minusculas
                    let textChar = ((string.charCodeAt(i) - 97 - parseInt(offset) + 52) % 26) + 97;
                    decipher += String.fromCharCode(textChar); //Devuelve una cadena creada en unicode
                }
                } else {
                decipher += letterD;
            }
        }
        return decipher; //retornar respuesta
    }
}