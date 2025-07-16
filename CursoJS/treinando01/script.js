function saudar() {
    var nome = document.getElementById('nome')
    var res = document.querySelector('div#res')
    var valor = nome.value

    if (valor.length == 0) {
        alert('Digite seu nome!')
    } else {
        res.innerHTML = `Olá, ${valor}!`
    }
}