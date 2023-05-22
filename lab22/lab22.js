
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
        if(n == 0){
            b = BigInt(0);
        }
        else{
        let a = BigInt(1);
  let b = BigInt(1);
  for (let i = 3; i <= n; i++) {
    let c = BigInt(a + b);
    a = b;
    b = c;
  }
}
  return b;
    }
    function compare(){

    }
    function sum(){

    }