window.cipher = {
  encode: () => {
    function encriptar(texto, offset)
{
    let textoCodificado = "";
    for(let i = 0; i < texto.length;i++)
    {
        let nLetra = texto[i].toUpperCase().charCodeAt();
        console.log(nLetra.value)
        let resultado = (nLetra - 65 + offset) % 26 + 65;
        let nuevaLetra = String.fromCharCode(resultado);
        textoCodificado = textoCodificado + nuevaLetra;
     }
     return textoCodificado;
}
  },
  decode: () => {
    function desencriptar(texto, offset)
{ let textoDecodificado = "";
    for(let i = 0; i < texto.length;i++)
    {
        let nLetra = texto[i].toUpperCase().charCodeAt();
        let resultado = (nLetra - 65 + offset) % 26 + 65;
        let nuevaLetra = String.fromCharCode(resultado);

     textoDecodificado = textoDecodificado + nuevaLetra;
    }
 return textoDecodificado;
}
  }
};
