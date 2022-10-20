function igual() {
    var x = 2
    var y = 2
    let resultado = (x == y)

    document.getElementById("resultado-igual").innerHTML = resultado
    document.getElementById("confirmado-igual").innerHTML = "Resultado ✔"
}

function diferente() {
    var x = 4
    var y = 2
    let resultado = (x != y)

    document.getElementById("resultado-diferente").innerHTML = resultado
    document.getElementById("confirmado-diferente").innerHTML = "Resultado ✔"
}

function maior() {
    var x = 3
    var y = 1
    let resultado = (x > y)

    document.getElementById("resultado-maior").innerHTML = resultado
    document.getElementById("confirmado-maior").innerHTML = "Resultado ✔"
}

function menor() {
    var x = 2
    var y = 9
    let resultado = (x < y)

    document.getElementById("resultado-menor").innerHTML = resultado
    document.getElementById("confirmado-menor").innerHTML = "Resultado ✔"
}

function maiorIgual() {
    var x = 3
    var y = 1
    let resultado = (x >= y)

    document.getElementById("resultado-maiorIgual").innerHTML = resultado
    document.getElementById("confirmado-maiorIgual").innerHTML = "Resultado ✔"
}

function menorIgual() {
    var x = 2
    var y = 9
    let resultado = (x <= y)

    document.getElementById("resultado-menorIgual").innerHTML = resultado
    document.getElementById("confirmado-menorIgual").innerHTML = "Resultado ✔"
}