const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

// Test pancakeSort
const testSort =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify(pancakeSort(a1)) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

// Test flip
const testFlip =
    jsc.forall("array nat", "nat", function(arr, n) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var flipped = flip(a1, n);
        return JSON.stringify(flipped.slice(0, n).reverse().concat(a1.slice(n))) === JSON.stringify(flipped);
    });

jsc.assert(testSort);
jsc.assert(testFlip);
