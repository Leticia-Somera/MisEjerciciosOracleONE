/* La variable textInput obtiene el texto que introduce el usuario */
const textInput = document.getElementById("input-text");
 

/* Función que busca cierta letra o palabra y la reemplaza por otra palabra o letra */
function codeDecodeText(text, search, replace) {     

    textResult = text.toLowerCase().split(search).join(replace);   
    return textResult;

}


/* Función que oculta y muestra elementos (Ej. la imagen del muñeco) */
function hideElements() {

    var img_hidden = document.getElementById("img-hidden");
    var title_hidden = document.getElementById("title-hidden");
    var par_hidden = document.getElementById("par-hidden");
    var result_text = document.getElementById("result-text");

    if (textInput.value !== "") {
        
        img_hidden.style.display = "none";
        title_hidden.style.display = "none";
        par_hidden.style.display = "none";
        result_text.style.display = "block";
    } else {
        img_hidden.style.display = "block";
        title_hidden.style.display = "block";
        par_hidden.style.display = "block";
        result_text.style.display = "none";
    }
    
}


/* Función que encripta el texto que introdujo el usuario */
function encrypt() {  
    
    console.log(textInput.value)
    codeDecodeText(textInput.value, "e", "enter");
    codeDecodeText(textResult, "i", "imes");
    codeDecodeText(textResult, "a", "ai");
    codeDecodeText(textResult, "o", "ober");
    codeDecodeText(textResult, "u", "ufat");
    
    hideElements();
    document.getElementById("result-text").innerHTML = textResult;
    
}


/* Función que desencripta el texto que introdujo el usuario */
function decrypt() {

    codeDecodeText(textInput.value, "enter", "e");
    codeDecodeText(textResult, "imes", "i");
    codeDecodeText(textResult, "ai", "a");
    codeDecodeText(textResult, "ober", "o");
    codeDecodeText(textResult, "ufat", "u");

    hideElements();
    document.getElementById("result-text").innerHTML = textResult;
}


/* Función que copia el texto obtenido luego de ser encriptado o desencriptado */
function copyText() {

    var textToCopy = document.getElementById("result-text");
    textToCopy.select();
    document.execCommand("copy");

}