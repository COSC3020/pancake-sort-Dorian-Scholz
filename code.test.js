const fs = require('fs');
const jsc = require('jsverify');


function flip(array, n) 
{
    let left = 0;
    let right = n - 1;
    while (left < right)
    {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
    }
    return array;
}


function pancakeSort(array) 
{
    for (let size = array.length; size > 1; size--)
    {
        let minIndex = 0;
        for (let i = 1; i < size; i++) 
        {
            if (array[i] < array[minIndex])
            {
                minIndex = i;
            }
        }
        if (minIndex !== size - 1) 
        {
            if (minIndex > 0) 
            {
                flip(array, minIndex + 1);
            }
            flip(array, size);
        }
    }
    return array;
}


const testSort = jsc.forall("array nat", function(arr)
{
    let a1 = JSON.parse(JSON.stringify(arr));
    let a2 = JSON.parse(JSON.stringify(arr));
    return JSON.stringify(pancakeSort(a1)) ===
           JSON.stringify(a2.sort((a, b) => a - b));
});

jsc.assert(testSort);

