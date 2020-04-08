const cipher = {

//FUNÇÃO ENCODE
encode: function(offset, mensagem){
  let mensagemEncoded = " ";
  let mensagem1 = mensagem.toUpperCase();

  for (var i = 0; i < mensagem1.length; i++) {
    let letraASC = mensagem1[i].charCodeAt(0);
    let cifrar = ((letraASC - 65 + offset) % 26) + 65;
    mensagemEncoded += String.fromCharCode(cifrar);
  } return mensagemEncoded;
},

//FUNÇÃO DECODE
decode: function(offset, mensagem){
  let mensagemDecoded = " ";
  let mensagem1 = mensagem.toUpperCase();

  for (var i = 0; i < mensagem1.length; i++) {
    let letraASC = mensagem1[i].charCodeAt(0);
    let decifrar = ((letraASC - 90 - offset) % 26) + 90;
    mensagemDecoded += String.fromCharCode(decifrar);
  } return mensagemDecoded;
}
};
export default cipher;



