const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", MostraPalavrasChave);

function MostraPalavrasChave() {
    const texto = document. querySelector("#entrada-de-texto").Value;
    const camporesultado = document.querySelector("#resultado-palavrachave");
    const palavras = texto.split(" ");

    campoResultado.textContent=palavras.join(", ")
}