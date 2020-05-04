// maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

// function minMaxAvg(arr){
//     let min = arr[0]
//     let max = arr[0]
//     let sum = 0
//     for(i = 0; i < arr.length; i++){
//         if (min > arr[i]){
//             min = arr[i]
//         }
//         if (max < arr[i]){
//             max = arr[i]
//         }
//         sum += arr[i]
//     }
//     let avg = sum/arr.length 
//     return console.log('Minimum is ' + min + ', maximum is ' + max +' and average is ' +avg +'.')
// }

// minMaxAvg([1, -2, 9, 4])

//--------------------

// fizzbuzz(15) would log the following (each element on its own line):

function fizzbuzz(num){
    for(let i = 0; i < num; i++ )
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz')
    }
    else if(i % 3 == 0){
        console.log('Fizz')
    }
    else if(i % 5 == 0){
        console.log('Buzz')
    }
    if (num < 0 || typeof num == "string"){
        return console.log("Parameter must be a positive number.")
    }
}

fizzbuzz(3)
fizzbuzz(15)
fizzbuzz(5)
fizzbuzz('fizzybuzzy')
fizzbuzz(-2)