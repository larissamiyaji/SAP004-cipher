import cipher from './cipher.js';


function encode(){
  let mensagem = document.getElementById('mensagemToEncode').value.toUpperCase();
  let mensagemEncoded = document.getElementById('mensagemEncoded');
  mensagemEncoded.innerHTML = mensagem;
}
let encodeButton = document.getElementById("encodeButton2");
encodeButton.addEventListener('click', encode);
//------------------------------------------------------------------------------
function decode(){
  let mensagem = document.getElementById('mensagemToEncode').value.toUpperCase();
  let mensagemEncoded = document.getElementById('mensagemEncoded');
  mensagemEncoded.innerHTML = mensagem;
}
let decodeButton = document.getElementById("decodeButton2");
decodeButton.addEventListener('click', decode);
//------------------------------------------------------------------------------
function offset(){
  let offset = Number(document.getElementById('offset2').value);
}
let offsetButton = document.getElementById('offset2');
offsetButton.addEventListener('click', offset);
