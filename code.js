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

