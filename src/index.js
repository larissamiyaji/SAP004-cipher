import cipher from './cipher.js';

function encode(event){
  event.preventDefault();
  let mensagem = document.getElementById('mensagemToEncode').value.toUpperCase();
  let mensagemEncoded = document.getElementById('mensagemEncoded');
  mensagemEncoded.innerHTML = cipher.encode(offset, string);
}
let encodeButton = document.getElementById("encodeButton2");
encodeButton.addEventListener('click', encode);
//------------------------------------------------------------------------------
function decode(event){
  event.preventDefault(); //IMPEDE QUE O TEXTO INSERIDO SUMA APÓS UM TEMPO
  let mensagem = document.getElementById('mensagemToEncode').value.toUpperCase();
  let mensagemEncoded = document.getElementById('mensagemEncoded');
  mensagemEncoded.innerHTML = mensagem;
}
let decodeButton = document.getElementById("decodeButton2");
decodeButton.addEventListener('click', decode);
//------------------------------------------------------------------------------
function offset(event){
  event.preventDefault();
  let offset = Number(document.getElementById('offset2').value);
}
let offsetButton = document.getElementById('offset2');
offsetButton.addEventListener('click', offset);
//------------------------------------------------------------------------------
