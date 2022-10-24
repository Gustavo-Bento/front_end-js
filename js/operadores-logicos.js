function and(){
    var x = 5
    var y = 3
    var z = 2
    let resultado
    if((x >= y) && (y != z)){
        resultado ="verdadeiro"
    }
    else{
        resultado = "falso"
    }
    document.getElementById("res-and").innerHTML = resultado
    document.getElementById("conf-and").innerHTML = "Resultado ✔"
}

function or(){
    var x = 5
    var y = 3
    var z = 2
    let resultado
    if((x >= y) || (y != z)){
        resultado ="verdadeiro"
    }
    else{
        resultado = "falso"
    }
    document.getElementById("res-or").innerHTML = resultado
    document.getElementById("conf-or").innerHTML = "Resultado ✔"
}

function nand(){
    var x = 5
    var y = 3
    var z = 2
    let resultado
    if(!((x >= y) && (y != z))){
        resultado ="verdadeiro"
    }
    else{
        resultado = "falso"
    }
    document.getElementById("res-nand").innerHTML = resultado
    document.getElementById("conf-nand").innerHTML = "Resultado ✔"
}

function nor(){
    var x = 5
    var y = 3
    var z = 2
    let resultado
    if(!((x >= y) || (y != z))){
        resultado ="verdadeiro"
    }
    else{
        resultado = "falso"
    }
    document.getElementById("res-nor").innerHTML = resultado
    document.getElementById("conf-nor").innerHTML = "Resultado ✔"
}

function xor(){
    var x = 5
    var y = 3
    var z = 2
    let resultado
    if((x >= y) ^ (y != z)){
        resultado ="verdadeiro"
    }
    else{
        resultado = "falso"
    }
    document.getElementById("res-xor").innerHTML = resultado
    document.getElementById("conf-xor").innerHTML = "Resultado ✔"
}

function nxor(){
    var x = 5
    var y = 3
    var z = 2
    let resultado
    if(!((x >= y) ^ (y != z))){
        resultado ="verdadeiro"
    }
    else{
        resultado = "falso"
    }
    document.getElementById("res-nxor").innerHTML = resultado
    document.getElementById("conf-nxor").innerHTML = "Resultado ✔"
}