function alertaNumero()
{
    let numero = document.getElementById("txNumero");
    
    let mensaje = document.getElementById("texto");
    
    let textoCodificado = encriptar(texto.value, numero.value);
    
    console.log(textoCodificado);
    
    document.getElementById("mCodificado").value = textoCodificado;
}

function leerMensaje()
{
    let numero = document.getElementById("csecret");
    
    let mensaje = document.getElementById("tcod");
    
    let textoDecodificado = desencriptar(mensaje.value, numero.value);
    
    console.log(textoDecodificado);
    
    document.getElementById("txtDecod").value = textoDecodificado;
}