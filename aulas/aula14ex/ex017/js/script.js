document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        console.log('Apertou o Enter');
        const btn = document.querySelector('#btn');
        btn.click();
    }
});

function gerar() {
    let num = document.querySelector('#num');
    let tab = document.querySelector('#tab');
    let tabuada = '';
    if (num.value.length == 0) {
        alert('[ERRO] Preencha o campo para ver a tabuada!');
    } else {
        n = Number(num.value);
        for (let c = 1; c <= 10; c += 1) {
            tabuada += `<p>${n} x ${c} = ${n * c}<br></p>`;
        }
        tab.style.padding = '.3em';
        tab.style.fontWeight = 'bold';
        tab.style.color = '#6D6D6D';
        tab.innerHTML = tabuada;
    }
}
