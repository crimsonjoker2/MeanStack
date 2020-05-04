// maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

function minMaxAvg(arr){
    let min = arr[0]
    let max = arr[0]
    let sum = 0
    for(i = 0; i < arr.length; i++){
        if (min > arr[i]){
            min = arr[i]
        }
        if (max < arr[i]){
            max = arr[i]
        }
        sum += arr[i]
    }
    let avg = sum/arr.length 
    return console.log('Minimum is ' + min + ', maximum is ' + max +' and average is ' +avg +'.')
}

minMaxAvg([1, -2, 9, 4])