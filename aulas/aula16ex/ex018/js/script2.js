let num = document.querySelector('#num');
let array = document.querySelector('#array');
let res = document.querySelector('#res');
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    }
    return false;
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) !== -1) {
        return true;
    }
    return false;
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.innerText = `Valor ${num.value} foi adicionado`;
        array.appendChild(item);
    } else {
        alert('Valor inválido ou já encontrado na lista.');
    }
}
