function my_function(n) {
    if (n == 1) {
        return 1
    }

    pieceStr = my_function(n - 1);
    
    return `${pieceStr} ${n}`
}

res = my_function(8);

console.log(res);