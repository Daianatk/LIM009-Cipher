window.onload = () => {
    
    /*rescatando el valor del texto a codificar */

    const btnTextEncode = document.getElementById("btn_encode");
    btnTextEncode.addEventListener("click", function() {
        let textEncode = document.getElementById("box-msg-encode").value;
        //textEncode = textEncode.toUpperCase();
        let number_offset = document.getElementById("n_offset_e").value;
        document.getElementById("msg-encode-check").innerHTML = window.cipher.encode(textEncode, number_offset);
    });

    /*rescatando el valor del texto a decodificar*/

    const btnTextDecode = document.getElementById("btn_decode");
    btnTextDecode.addEventListener("click", function() {
        let textDecode = document.getElementById("msg-encode-check").value;
        //textDecode = textDecode.toUpperCase();
        let number_offset = document.getElementById("n_offset_d").value;
        document.getElementById("msg-decode-check").innerHTML = window.cipher.decode(textDecode, number_offset);
    });
}