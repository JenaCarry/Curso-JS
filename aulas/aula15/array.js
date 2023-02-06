let array = ['b', 'p', 'c', 'a'];
array.sort();
console.log('ORDENADO:', array);
for (let x in array) {
    console.log(`LETRA: ${array[x]} CÓDIGO: ${array[x].charCodeAt(0)}`);
}

array = ['b', 'P', 'c', 'a'];
array.sort();
console.log('ORDENADO:', array);
for (let x in array) {
    console.log(`LETRA: ${array[x]} CÓDIGO: ${array[x].charCodeAt(0)}`);
}

const numeros = [99, 9, 2, 1, 25, 100];
numeros.sort();
console.log('ORDENADO:', numeros);
for (let x in numeros) {
    console.log(
        `NÚMERO: ${numeros[x]} CÓDIGO: ${String(numeros[x]).charCodeAt(0)}`
    );
}

const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);
console.log('ORDENADO:', numbers);
