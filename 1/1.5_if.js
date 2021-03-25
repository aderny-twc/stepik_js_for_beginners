function testIf(a, b) {
    let x;
	
	if (a > b) {
		x = a + b;
	} else {
		x = a * b;
	}
	
    return x;
}

// or
function testIfTern(a, b) {
    var x;
    x = a > b ? a + b : a * b;
    return x;
}
// 1. If statement
let testIf = (a, b) => {
    if (a > b) return a + b;
    return a * b;
};