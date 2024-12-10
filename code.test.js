const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSort =
    jsc.forall("array nat", function(arr) 
    {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify(pancakeSort(a1)) ==
            JSON.stringify(a2.sort(function(a, b) { return a - b; }));
    });

jsc.assert(testSort);

const testFlip =
    jsc.forall("array nat, nat", function(arr, n)
        {
        if (n >= 0 && n <= arr.length) {
            var a1 = JSON.parse(JSON.stringify(arr));
            var flipped = flip(a1, n);
            var expected = arr.slice(0, n).reverse().concat(arr.slice(n));
            return JSON.stringify(flipped) === JSON.stringify(expected);
        }
        return true;
    });

jsc.assert(testFlip);
