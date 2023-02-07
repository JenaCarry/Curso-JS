let valores = [];
function adicionar() {
    let res = document.querySelector('#res');
    res.innerHTML = '';
    let numero = document.querySelector('#num');
    let array = document.querySelector('#array');
    let num = Number(numero.value);
    let valor = valores.indexOf(num);
    if (num < 1 || num > 100 || valor > -1) {
        alert('Valor inválido ou já encontrado na lista!');
    } else {
        // let maior = num;
        valores.push(num);
        let item = document.createElement('option');
        item.text = `Valor ${num} foi adicionado`;
        array.appendChild(item);
    }
}

function finalizar() {
    let res = document.querySelector('#res');
    res.innerHTML = `<p>Ao todo, temos ${valores.length} números informados</p>`;
    /*
    Formas de achar o maior ou menor valores
    1º let maior = Math.max.apply(null, valores);
    2º let maior = Math.max(...valores)
    3º let max = valores.reduce(function (a, b) {
        return Math.max(a, b);
    });
    */
    res.innerHTML += `<p>O maior valor informado foi ${Math.max(
        ...valores
    )}</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${Math.min(
        ...valores
    )}</p>`;
    /*
    Formas de somar um array
    1º  let sum = valores.reduce(function (sum, i) {
        return sum + i;
    });
    2º let sum = 0;
    for (let valor of valores) {
        sum += valor;
    }
    */
    let somar = valores.reduce((sum, i) => sum + i);
    res.innerHTML += `<p>Somando todos os valores, temos ${somar}</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${
        somar / valores.length
    }</p>`;
}
