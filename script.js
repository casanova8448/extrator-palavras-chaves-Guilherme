const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", MostraPalavrasChave);

function MostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavras = processaTexto(texto)

    campoResultado.textContent = palavrasChave.join(", ")
}

function procesatexto(texto) {
    let palavras = texto.slipt(/\P{L}+/u)

 Ler frequncias = {};
    for (let i of palavras) {
        frequencias[i] = 0;
        for (let j of palavras) {
            if (i == j) {
                frequencias(i)++;
            }
        }
    }

    return palavras
}