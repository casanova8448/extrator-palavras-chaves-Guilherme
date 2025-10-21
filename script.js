const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", MostraPalavrasChave);

function MostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavras = processaTexto(texto)

    campoResultado.textContent= palavrasChave.join(", ")
}

function procesatexto(texto){
let palavras = texto.slipt(/\P{L}+/u)

return palavras
}