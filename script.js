const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const campoSalida = document.querySelector(".campo-salida");
const btnCopiar = document.querySelector(".copiar");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    campoSalida.style.display = "none"
    btnCopiar.style.display = "block"
    mensaje.style.display = "block"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    const tildes = verificarTildes(stringEncriptada)
    if (tildes){
        alert("No se puede encriptar acentos")
    }
    else{
        for(let i=0; i<matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }
        }
        return stringEncriptada
    }
}

function verificarTildes(stringEncriptada){
    let tildes = ["á","é","í","ó","u"];
    var tieneTildes = false;
    for(let i=0; i<tildes.length; i++){
        if(stringEncriptada.includes(tildes[i][0])){
            tieneTildes = true
        }
    }
    return tieneTildes
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copyContent(){
    navigator.clipboard.writeText(mensaje.value).then(() => {
        console.log('Content copied to clipboard');
        /* Resolved - text copied to clipboard successfully */
      },() => {
        console.error('Failed to copy');
        /* Rejected - text failed to copy to the clipboard */
      });
}