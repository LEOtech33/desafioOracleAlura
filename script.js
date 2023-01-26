

var cripto = document.querySelector("#input-text");
var descripto = document.querySelector("#output");






function criptografar(){

var texto = cripto.value;
var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  document.getElementById('output').innerHTML = '<textarea readonly id="output-text">' + resultCripto + 
  '</textarea>'+ '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>' +'<button class="btn-limpar" id="limpar" onclick="limpar()">Limpar</button>'


}




function descriptografar(){

    var texto = cripto.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="output-text">' + resultDescripto + 
    '</textarea>'+ '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>' +'<button class="btn-limpar" id="limpar" onclick="limpar()">Limpar</button>'    
}

function limpar(){


  document. getElementById("input-text"). value = '';


}


function copiar() {
    var textoCop = document.getElementById('output-text');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  





