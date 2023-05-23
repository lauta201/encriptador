const textArea= document.querySelector(".area-texto");
const mensaje = document.querySelector(".msn-encriptado");

function btnEncriptar(){
    const textoEncriptado=encriptar(textArea.value);
    mensaje.value =textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage="none";
}



function encriptar(textoEncriptar){
    let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    textoEncriptar=textoEncriptar.toLowerCase();

    for(let i = 0; i< codigoMatriz.length; i++){
        if(textoEncriptar.includes(codigoMatriz [i][0])){
            textoEncriptar = textoEncriptar.replaceAll(codigoMatriz[i][0], codigoMatriz[i][1]);
            
        }
    }

    return textoEncriptar;

}


function desencriptar (textoDesencriptado){
    let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    textoDesencriptado=textoDesencriptado.toLowerCase();

    for(let i = 0; i< codigoMatriz.length; i++){
        if(textoDesencriptado.includes(codigoMatriz [i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(codigoMatriz[i][1], codigoMatriz[i][0]);
            
        }
    }

    return textoDesencriptado;
}

function btnDesencriptar(){
    const textoEncriptado=desencriptar(textArea.value);
    mensaje.value =textoEncriptado;
    textArea.value="";
}
 
function copiar(){
    const btnCopiar = document.querySelector('.btn-copiar');
    const textoCopiado = document.querySelector('.msn-encriptado');
    textoCopiado.select();
    document.execCommand('copy');
}