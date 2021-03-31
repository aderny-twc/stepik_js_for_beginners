function testArray(a, b) {
    let firstArr = a.reduce((c, d) => c + d, 0);
    let secondArr = b.reduce((c, d) => c + d, 0);
    
    return firstArr + secondArr;
}

res = testArray([1, 2, 3], [2, 3, 6])
console.log(res);