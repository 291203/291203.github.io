
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
        a = BigInt(1); 
   b=BigInt(1); 
   if (n== BigInt(0))
   {
       return BigInt(0); 
   }
   else
   { 
       for (i = BigInt(3); i<=n; i++) 
       {
           c = a+b;
           a=b;
           b=c;
       }
       return b;}
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