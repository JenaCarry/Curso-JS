function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('nasc')
    var res = document.querySelector('#res')
    if (fAno.value.length == 0 || Number(fAno.value > ano)) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fAno.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.paddingTop = '.5em'

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 14) {
                // Criança
                img.setAttribute('src', 'images/foto-bebe-m.png')
            } else if (idade < 24) {
                // Adolescente
                img.setAttribute('src', 'images/foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'images/foto-idoso-m.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                // Criança
                img.setAttribute('src', 'images/foto-bebe-f.png')
            } else if (idade < 24) {
                // Adolescente
                img.setAttribute('src', 'images/foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'images/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}