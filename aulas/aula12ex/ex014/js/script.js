function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = 'https://images.pexels.com/photos/2373419/pexels-photo-2373419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        document.body.style.background = '#b9846f'
    } else {
        // Boa noite!
        img.src = 'https://images.pexels.com/photos/2888489/pexels-photo-2888489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        document.body.style.background = '#515154'
    }
}
