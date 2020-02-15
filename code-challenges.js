// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisble by three"

const divBy3 = num =>{
    if(num%3===0){
        return `${num} is divisible by three`
    } else{
        return `${num} is not divisible by three`
    }
}
console.log(divBy3(num1))
console.log(divBy3(num2))
console.log(divBy3(num3))

// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
const capitalized = array => {
    let cap = array.map(value => value.replace(/^\w/, l => l.toUpperCase()))
    return cap
}

console.log(capitalized(randomNouns))




// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const numOnly = array =>{
    let nums = array.filter(value=> typeof value === "number").sort((a,b)=> a-b)
    return nums
}
console.log(numOnly(mixedDataArray))


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "t"
// Expected output: 3

const indexVowel = str => {
    let vowels = "aeiou"
    let count = 0
   for(let i=0;i<str.length;i++){
       if(vowels.includes(str.charAt(i))){
           return i
           count++
       }
   }
   if(count<1){
       return "String does not contain vowels"
   }
    
}
console.log(indexVowel(vowelTester1))
console.log(indexVowel(vowelTester2))



// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"


const calculator = (num1,operator,num2) =>{
    if(operator === "*"){
        return num1 * num2
    } else if(operator ==="/"){
       if(num2 === 0){
           return `Can't divide by 0`
       }
        return num1 /num2
    } else if(operator === "+"){
        return num1 + num2
    } else if(operator ==="-"){
       return  num1 - num2
    } else {
        return `Make sure you enter an operator`
    }
}



// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"