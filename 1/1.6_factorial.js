function testFactorial(a) {
    var x = 1;
    for (var i = 1; i <= a; i++) {
        x *= i;
    }
    return x;
}