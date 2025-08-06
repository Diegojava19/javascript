function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    
    console.log(i,f,p)

    res.innerHTML = 'Contando: <br>'

    for (var c = i; c <= f; c += p) {
        res.innerHTML += `${c}👉`
    }

    res.innerHTML += '🏁'
}