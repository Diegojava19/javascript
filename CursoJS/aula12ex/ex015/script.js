function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina-criançaa.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina-criança2.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
