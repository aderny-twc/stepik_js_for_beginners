function testWhile(a) {
    var sum = 0;
    for (let i = 0; i <= a; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

// OR

function testWhile(a) {
    var sum = 0;
    let y = 0;
    while (y <= a) {
        sum += y;
        y += 2;
    }
    return sum;
}+