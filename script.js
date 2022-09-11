const inputTexto = document.querySelector("#input-message");
const outputTexto = document.querySelector("#output-message");

//Criptografar
function btnEncode(){
    const textoCriptografado = encodeMessage(inputTexto.value);
    if (textoCriptografado != "") { 
        outputTexto.value = textoCriptografado;
        showMessage();
    }
}

function encodeMessage(mensagemCriptografar) {
    let matrizCodigo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    mensagemCriptografar = mensagemCriptografar.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(mensagemCriptografar.includes(matrizCodigo[i][0])){
            mensagemCriptografar = mensagemCriptografar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return mensagemCriptografar;
}

// Descriptografar
function btnDecode() {
    const textoDescriptografado = decodeMessage(inputTexto.value);
    if (textoDescriptografado != "") {  //Não executa sem mensagem inserida
        outputTexto.value = textoDescriptografado;
        showMessage();
    }    
}

function decodeMessage(mensagemDescriptografar) {
        
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    mensagemDescriptografar = mensagemDescriptografar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(mensagemDescriptografar.includes(matrizCodigo[i][1])) {
            mensagemDescriptografar = mensagemDescriptografar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return mensagemDescriptografar;
}

// Mostrar mensagem traduzida
function showMessage() {
    document.getElementById("nocode").style.display = "none";
    document.getElementById("withcode").style.display = "block";
}

// Botão copiar
function btnCopy() {
    let copyText = document.querySelector("#output-message");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);    
    copyText.value = "";
}

// Botão resetar ao clicar na logo
function btnReset() {
    document.getElementById("nocode").style.display = "block";
    document.getElementById("withcode").style.display = "none";
    document.getElementById("output-message").value = "";
    document.getElementById("input-message").value = "";
}