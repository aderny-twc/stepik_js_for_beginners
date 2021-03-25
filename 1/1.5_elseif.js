function testIf(a, b) {
    let x;
	
	if (a < b) {
		x = a + b;
	} else if (a > b) {
		x = a - b;
	} else {
		x = a * b
	}
	
    return x;
}
