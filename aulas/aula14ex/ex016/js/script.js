function contar() {
    let inicio = document.querySelector('#inicio');
    let fim = document.querySelector('#fim');
    let passo = document.querySelector('#passo');
    let res = document.querySelector('#res');
    let c = '';

    if (
        inicio.value.length == 0 ||
        fim.value.length == 0 ||
        passo.value.length == 0
    ) {
        alert('[ERRO] Preencha os campos!');
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Math.abs(Number(passo.value));
        if (p == 0) {
            alert('PASSO INVÁLIDO! Considerando PASSO = 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449} `;
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449} `
            }
        }
        res.innerHTML += `\u{1f3c1}`;
    }
}
