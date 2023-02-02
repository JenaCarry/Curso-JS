const gerar = document.querySelector('#btn');
gerar.addEventListener('click', clicar);

let num = document.querySelector('#num');

function clicar() {
    let tab = document.querySelector('#tab');
    let numero = num.value;

    let tabuada = '';
    if (numero == '') {
        alert('[ERRO] Preencha o campo para ver a tabuada!');
    } else {
        for (var c = 1; c <= 10; c++) {
            tabuada += `<p>${numero} x ${c} = ${numero * c}<br></p>`;
        }
        tab.style.padding = '.3em';
        tab.style.fontWeight = 'bold';
        tab.style.color = '#6D6D6D';
        tab.innerHTML = tabuada;
    }
}
