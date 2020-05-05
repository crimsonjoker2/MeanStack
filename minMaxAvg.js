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

// function fizzbuzz(num){
//     for(let i = 1; i <= num; i++ ){

//         if (i % 3 == 0 && i % 5 == 0){
//             console.log('FizzBuzz')
//         }
//         else if(i % 3 == 0){
//             console.log('Fizz')
//         }
//         else if(i % 5 == 0){
//             console.log('Buzz')
//         }
//         else{
//             console.log(i)
//         }
//         if (num < 0 || typeof num == "string"){
//             return console.log("Parameter must be a positive number.")
//         }
//     }
// }

// fizzbuzz(3)
// fizzbuzz(15)
// fizzbuzz(5)
// fizzbuzz('fizzybuzzy')
// fizzbuzz(-2)

//---------------------

// Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.

// Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.

// function bracesValid(braces){
//     let checkBraces = [];
//     let map = {
//         '(':')',
//         '{':'}',
//         '[':']'
//     }
//     for(let i = 0; i < braces.length; i++){
//         if (braces[i] == '(' || braces[i] == '{' || braces[i] == '['){
//             checkBraces.push(braces[i]);
//         }
//         else {
//             let checkClosing = checkBraces.pop();

//             if (braces[i] !== map[checkClosing]){
//                 return false
//             }
//         }
//     }
//     if (checkBraces.length !== 0){
//         return false
//     }
//     return true
// }


// console.log(bracesValid("{{()}}[]"))
// console.log(bracesValid("{(})"))

//------------------------------

// function bubbleSort(arr) {
//     for (i = 0; i < arr.length; i++) {
//         for (y = 0; y < arr.length - i; y++) {
//             if (arr[y] > arr[y + 1]) {
//                 temp = arr[y]
//                 arr[y] = arr[y + 1]
//                 arr[y + 1] = temp
//             }
//         }
//     }
//     console.log(arr)
// }

// bubbleSort([5, 3, 1, 6, 7, 2, 8, 4])

//----------------------

// function coinChange(num){
//     let dollar = 100
//     let quarter = 25
//     let dime = 10
//     let nickle = 5
//     let penny = 1
//     let dollarCount, quarterCount, dimeCount, nickleCount, pennyCount
//     if (num > dollar){
//         dollarCount = Math.floor(num/dollar)
//         num -= dollar * dollarCount
//     }
//     if (num > quarter){
//         quarterCount = Math.floor(num/quarter)
//         num -= quarter * quarterCount
//     }
//     if (num > dime){
//         dimeCount = Math.floor(num/dime)
//         num -= dime * dimeCount
//     }
//     if (num > nickle){
//         nickleCount = Math.floor(num/nickle)
//         num -= nickle * nickleCount
//     }
//     if (num > penny){
//         pennyCount = Math.floor(num/penny)
//         num -= penny * pennyCount
//     }
//     console.log('Dollar:' + dollarCount + ', Quarter:' + quarterCount + ', Dime:' + dimeCount + ', Nickle: ' + nickleCount + ', Penny: ' + pennyCount)
// }

// coinChange(312)
// coinChange(78)
// // coinChange({dollars: 2, dimes: 15, pennies: 5})

// function userLanguages(someArray) {
//     for (var i = 0; i < someArray.length; i++) {
//         for (var key in someArray[i]['interests']) {
//             int = someArray[i]['interests'][key];
//         }
//         name = someArray[i].fname + ' ' + someArray[i].lname
//         lang = someArray[i].languages
//         saying = name + " knows " + lang + "."
//         saying2 = name + " is also interested in " + int + "."
//         console.log(saying)
//         console.log(saying2)
//     }
//     return someArray
// }
// users = [
//     {
//         fname: "Kermit",
//         lname: "the Frog",
//         languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
//         interests: {
//             music: ["guitar", "flute"],
//             dance: ["tap", "salsa"],
//             television: ["Black Mirror", "Stranger Things"]
//         }
//     },
//     {
//         fname: "Winnie",
//         lname: "the Pooh",
//         languages: ["Python", "Swift", "Java"],
//         interests: {
//             food: ["honey", "honeycomb"],
//             flowers: ["honeysuckle"],
//             mysteries: ["Heffalumps"]
//         }
//     },
//     {
//         fname: "Arthur",
//         lname: "Dent",
//         languages: ["JavaScript", "HTML", "Go"],
//         interests: {
//             space: ["stars", "planets", "improbability"],
//             home: ["tea", "yellow bulldozers"]
//         }
//     }
// ]
// userLanguages(users)
//-------- General sort concept -----//Not part of the assignments.
// var numbers = [22,2,10,7,5,31];

// numbers.sort(function(a,b){
// return a - b;
// });
// console.log(numbers);

//-------------------

function binarySearch(arr, x){
    let beginning = 0, end = arr.length-1;

    while(beginning <= end){
        let mid = Math.floor((beginning + end)/2);
        if (arr[mid] === x){
            return true;
        }
        else if(x > arr[mid]){
            beginning = mid + 1;
        }
        else{
            end = mid - 1;
            
        }
        
    }
    return false;
}


console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93))

console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15))