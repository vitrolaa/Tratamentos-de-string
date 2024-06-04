function converterMinToMai() {
    var input = document.getElementById("minusculoInput").value;
    var output = input.toUpperCase();
    document.getElementById("maiusculoOutput").value = output;
}

function converterMaiToMin() {
    var input = document.getElementById("maiusculoInput").value;
    var output = input.toLowerCase();
    document.getElementById("minusculoOutput").value = output;
}

function contarCaracteres() {
    var input = document.getElementById("palavraInput").value;
    var caracteres = input.length;
    document.getElementById("resultado").textContent = "A palavra '" + input + "' tem " + caracteres + " caracteres";
}

function removerEspaco() {
    var input = document.getElementById("textoComEspacoInput").value;
    var output = input.replace(/\s/g, '');
    document.getElementById("textoSemEspacoOutput").value = output;
}

function trocarAporAsterisco() {
    var input = document.getElementById("palavraInput2").value;
    var output = input.replace(/a/g, '*');
    document.getElementById("palavraComAsteriscoOutput").value = output;
}
