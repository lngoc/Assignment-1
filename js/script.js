//Step 1
//Step 2
//Step 3
let someMonth
function theMonth(){}
let currentMonth
let summerMonth
let MyLibraryFunction

let num = 50; // Numeric Literal Expression
let str = "My name is Lyn"; // String Literal Expression
let isStudent = true; //Boolean 
let empty = null; // Null Literal Expression

let ans = 50 / 5 
let IdValid = (age >= 18) && (hasIDCard === true)

let strFirstName = "Lyn"
let strLastName = "Ngoc"
let strAddress
let strCity = "San Diego"
let strState
let strZipCode
let strYourAge
let strReferralSource
let strMayWeContactYou

let strFullName = strFirstName + strLastName
console.log(strFullName)

let nums = 28;
let strWord = "I'm"
console.log(strWord + nums)

let booLeanValue = true;
let strAgeCanDrink = "21";
console.log(booLeanValue + strAgeCanDrink) // created variable boolean and string

let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
console.log(someString) // fixed by adding \ in I'm 

let nullVariable = null // variable with null value
console.log(nullVariable)

let undefinedVariable // variable with undefined value
console.log(undefinedVariable)

// using typeof 
console.log(typeof "Welcome to Comp 690") // string
console.log(typeof 2023) // number
console.log(typeof true) //boolean
console.log(typeof {}) // object
console.log(typeof undefined) //undefined

//declare variables
let fullName = "Lyn Ngoc" // variable with my name
alert("Hello "+ fullName + " , Welcome to the Javascript class!") // display the alert


let course = "Javascript" 

let alertMessage = "Hello " + fullName + ".\nWelcome to " + course +" class!"
console.log(alertMessage) // display the alert message

// hardcoded strings with prompts

let name = prompt("Please enter your Full Name")
let takingCourse = prompt("Please enter the course that you are taking")
alert("Hello "+ name + ".\nWelcome to "+takingCourse +" class!")

let x = 10 // declare a variable x
let y = 20 // declare a variable y 
console.log(x+y) // display the sum of x and y 

let z = 20
z += 20
console.log(z)// display 20 +20 = 40

let a = 20
a *= 5
console.log(a)// display 20 * 5 = 100

let b = 20 % 3
b /= 1
console.log(b)//display 2


let num1 = 10
let num2 = 20
let trueValue = ( num1 < num2 ) && (num1 != num2) // Using comparison and logical operators to evaluate to true
console.log(trueValue)


let falseValue = ( num1 < num2) || (num1 === num2)// Using comparison and logical operators to evaluate to false
console.log(falseValue)
