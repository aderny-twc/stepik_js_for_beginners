function testErrorFunc(a, func) {
    let x = '';         
    try {
        // x = func(a);
        func(a);
    } catch(ex) {
        let x = ex.name;
    }
    return x;
}