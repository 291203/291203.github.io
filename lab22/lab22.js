
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
        n(0) = BigInt(0);
        n(1) = BigInt(1);
        let result = BigInt(1);
        for (let i = 0; i <= n;i++){
            result = BigInt(n-1)+BigInt(n-2);
        }
    return result;
    }
    function compare(){

    }
    function sum(){

    }