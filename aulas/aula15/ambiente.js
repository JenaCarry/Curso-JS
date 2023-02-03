let num = [5, 8, 2, 9, 3];
console.log(num);

// Mostrar elemento em determinada posição
console.log(`O primeiro valor do vetor é ${num[0]}`);

// Adiciona mais um elemento no array na posição indicada
num[5] = 7;

// Adiciona mais um elemento no array na última posição
num.push(6);

// Comprimento de um array
console.log(`Nosso vetor tem ${num.length} elementos`);

// Ordenar um array
num.sort();

let pos = num.indexOf(3);
// let pos = num.indexOf(4);
if (pos == -1) {
    console.log('O valor não foi encontrado!');
} else {
    console.log(`O valor 3 está na posição ${pos}`);
}
