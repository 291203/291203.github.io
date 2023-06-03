
    'use strict';
    /**
     * 
     * @param {number} x возводимое в степень число
     * @param {number} n СтепенЬ - натуральное
     * @return {number} - число x в стпени n
     */
    function pow(x, n) {
        return x**n;
    }
    function sumTo(n) {
        let result = 0;
        for (let i = 1; i <= n; i++) {
        result += i;
        }

    return result;
    }
    function factorial(n){
        let result = BigInt(1);
        for (let i = 1; i <= n;i++){
            result *= BigInt(i);
        }
    return result;
    }
    function fib(n){
        let a = 1n;
    let b = 1n;
    let c;
    if (n==0) return 0;
    if (n==1) return 1;
    if (n==2) return 1;
    for (let i = 3; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    if (b==1n)
      b = 0;
    return b; 
    }
    function compare(x) {
        let result = function (y) {    
            if (y > x) return true
            else if (y < x) return false
            else return null;        
        }
        return result;
      }
      function sum() {
        let result = 0;
    
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
    
        return result;
    }