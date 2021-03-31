function testStr(a, b) {
    return a.indexOf(b);
}

res = testStr("This is a test string", "test");
console.log(res);


// OR 
const testStr = (a, b) => a.indexOf(b);