function flip(array, n) 
{
    return array.slice(0, n).reverse().concat(array.slice(n));
}

function pancakeSort(array) 
{
    for (let i = array.length; i > 1; i--)
    {
        let maxIndex = 0;
        for (let j = 1; j < i; j++) 
        {
            if (array[j] > array[maxIndex]) 
            {
                maxIndex = j;
            }
        }
        if (maxIndex !== i - 1) 
        {
            flip(array, maxIndex + 1);
            flip(array, i);
        }
    }
    return array;
}
