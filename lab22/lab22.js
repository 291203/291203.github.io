
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