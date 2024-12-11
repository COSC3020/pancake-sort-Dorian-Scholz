function flip(array, n)
{
    return array.slice(0, n).reverse().concat(array.slice(n));
}

function pancakeSort(array) 
{
    let n = array.length;
    
    for (let i = n; i > 1; i--) 
    {
        let maxIndex = 0;
        for (let j = 1; j < i; j++)
        {
            if (array[j] > array[maxIndex]) 
            {
                maxIndex = j;
            }
        }
        
        if (maxIndex === i - 1) 
        {
            continue;
        }

        if (maxIndex !== 0) 
        {
            array = flip(array, maxIndex + 1);
        }

        array = flip(array, i);
    }
    
    return array;
}
