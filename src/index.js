window.onload = () => {

    /*activado y desactivado de los enlaces de cada pestaña*/

    const linkActive = document.getElementById("linkEncode");
    const linkDesactive = document.getElementById("linkDecode");

    linkActive.addEventListener("click", function() {
        document.getElementById("linkEncode").classList.add("linkActive");
        document.getElementById("linkDecode").classList.remove("linkActive");
        document.getElementById("contentEncode").classList.remove("displayNone");
        document.getElementById("contentEncode").classList.add("displayBlock");
        document.getElementById("contentDecode").classList.remove("displayBlock");
        document.getElementById("contentDecode").classList.add("displayNone");
    });

    linkDesactive.addEventListener("click", function() {
        document.getElementById("linkEncode").classList.remove("linkActive");
        document.getElementById("linkDecode").classList.add("linkActive");
        document.getElementById("contentDecode").classList.remove("displayNone");
        document.getElementById("contentDecode").classList.add("displayBlock");
        document.getElementById("contentEncode").classList.remove("displayBlock");
        document.getElementById("contentEncode").classList.add("displayNone");
    });

    /*rescatando el valor del texto a codificar */

    const btnTextEncode = document.getElementById("btnEncode");
    btnTextEncode.addEventListener("click", function() {
        let textEncode = document.getElementById("txtEncode").value;
        let numberOffset = document.getElementById("nOffsetE").value;
        document.getElementById("tEncode").innerHTML = window.cipher.encode(textEncode, numberOffset);
    });

    /*rescatando el valor del texto a decodificar*/

    const btnTextDecode = document.getElementById("btnDecode");
    btnTextDecode.addEventListener("click", function() {
        let textDecode = document.getElementById("txtDecode").value;
        let numberOffset = document.getElementById("nOffsetD").value;
        document.getElementById("tDecode").innerHTML = window.cipher.decode(textDecode, numberOffset);
    });
}