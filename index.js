exports.factorial = function(n) {
    if(n==0)
        return 1;
    return n * this.factorial(n-1);
}