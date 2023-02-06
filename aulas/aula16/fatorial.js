function fatorial(num) {
    let fat = 1;
    for (let c = num; c > 1; c -= 1) {
        fat *= c;
    }
    return fat;
}
console.log(fatorial(5));

const fatorial2 = (num) => {
    if (num == 1) {
        return 1;
    } else {
        return num * fatorial2(num - 1);
    }
};
console.log(fatorial2(5));
