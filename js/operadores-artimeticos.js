function adicao() {
    var x = 2
    var y = 2
    let resultado = x + y

    document.getElementById("resultado-adicao").innerHTML = resultado
    document.getElementById("confirmado-adicao").innerHTML = "Resultado ✔"
}

function subtracao() {
    var x = 4
    var y = 2
    let resultado = x - y

    document.getElementById("resultado-subtracao").innerHTML = resultado
    document.getElementById("confirmado-subtracao").innerHTML = "Resultado ✔"
}

function multiplicacao() {
    var x = 3
    var y = 3
    let resultado = x * y

    document.getElementById("resultado-multiplicacao").innerHTML = resultado
    document.getElementById("confirmado-multiplicacao").innerHTML = "Resultado ✔"
}

function divisao() {
    var x = 8
    var y = 2
    let resultado = x / y

    document.getElementById("resultado-divisao").innerHTML = resultado
    document.getElementById("confirmado-divisao").innerHTML = "Resultado ✔"
}

function exponenciacao() {
    var x = 2
    var y = 3
    let resultado = x ** y

    document.getElementById("resultado-expo").innerHTML = resultado
    document.getElementById("confirmado-expo").innerHTML = "Resultado ✔"
}

function resto() {
    var x = 5
    var y = 2
    let resultado = x % y

    document.getElementById("resultado-modo").innerHTML = resultado
    document.getElementById("confirmado-modo").innerHTML = "Resultado ✔"
}

function incrementacao() {
    var x = 5
    x++
    let resultado = x

    document.getElementById("resultado-inc").innerHTML = resultado
    document.getElementById("confirmado-inc").innerHTML = "Resultado ✔"
}

function decrementacao() {
    var x = 5
    x--
    let resultado = x

    document.getElementById("resultado-dec").innerHTML = resultado
    document.getElementById("confirmado-dec").innerHTML = "Resultado ✔"
}