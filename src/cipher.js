const cipher = {

//FUNÇÃO ENCODE
encode: function(offset, string){
  let mensagemEncoded = " ";
  let mensagem = string.toUpperCase();

  for (var i = 0; i < mensagem.length; i++) {
    let letraASC = mensagem[i].charCodeAt(0);
    let cifrar = ((letraASC - 65 + offset) % 26) + 65;
    mensagemEncoded += String.fromCharCode(cifrar);
  } return mensagemEncoded;
},
//FUNÇÃO DECODE
decode: function(offset, string){
  let mensagemDecoded = " ";
  let mensagem = string.toUpperCase();

  for (var i = 0; i < mensagem.length; i++) {
    let letraASC = mensagem[i].charCodeAt(0);
    let decifrar = ((letraASC - 90 - offset) % 26) + 90;
    mensagemDecoded += String.fromCharCode(decifrar);
  } return mensagemDecoded;
}
};
export default cipher;
