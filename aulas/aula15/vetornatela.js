let valores = [8, 1, 7, 4, 2, 9];
valores.sort();
console.log(valores);

/*
for (let pos = 0; pos < valores.length; pos += 1) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
*/

// Posso omitir let
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

console.log(`O valor 7 está na posição ${valores.indexOf(7)}`);
