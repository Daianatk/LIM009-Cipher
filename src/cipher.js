window.cipher = {
    encode: (string, offset) => {
        //mensaje recibido
        let cipher = "";
        for (let i = 0; i < string.length; i++) {
            let character = string[i];
            if (character.match(/[a-z]/i)) {
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    let textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
                    cipher += String.fromCharCode(textChar);
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    let textChar = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
                    cipher += String.fromCharCode(textChar);
                }
            } else {
                cipher += character;
            }
        }
        return cipher;
    },
    decode: (string, offset) => {
        //mensaje recibido
        let decipher = "";

        //inicio recorrido de caracteres
        for (let i = 0; i < string.length; i++) {
            let characterD = string[i];
            //identificacion de espacios vacios
            if (characterD.match(/[a-z]/i)) {
                
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    let textChar = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
                    decipher += String.fromCharCode(textChar);
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    let textChar = ((string.charCodeAt(i) - 97 - parseInt(offset) + 52) % 26) + 97;
                    decipher += String.fromCharCode(textChar);
                }



            } else {
                decipher += characterD;
            }
        }
        //retornar respuesta
        return decipher;
    }
}