const contar = document.querySelector('#btn');
contar.addEventListener('click', clicar);
const contagem = document.querySelector('#contagem');
function clicar() {
    let inicio = Number(document.querySelector('#inicio').value);
    let fim = Number(document.querySelector('#fim').value);
    let passo = Number(document.querySelector('#passo').value);
    let c = '';
    for (inicio; inicio <= fim; inicio += passo) {
        if (inicio < fim) {
            c += `${inicio} &#x1F449; `;
        }
        contagem.innerHTML = `${c} &#x1F3F4;`;
    }
}
