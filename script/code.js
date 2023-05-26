/*
Question 1
1. VARIABLE:
Variables are containers for storing data (values), we use these three keyword types to delaclare a variable:
i.e var, let or const

e.g var x = 10;
    var y = 15;


2. VALUE:
Is the output that is given when a variable is declared/assigned, it could be a string, boolean, number, object, symbol etc.

e.g var x = 'Hello';
    var y = 12;


3. DATA TYPE:
We have two data types in js namely Primitive and Dynamic data type:
-Primitive data types are predefined and their size depends on the type of data structure, examples are numbers, strings etc.


4.INITIALIZATION:
Initialization occurs when you assign an initial value to a varible. It is good practice to initialize variables when you declere them, it provides an idea of the intended use.

e.g let firstName = "Ayabulela";
    let lastName = "Sityata",


5. The difference between var, let and const:
-One of the most common difference between let, var and const is that var is globally/functioned scoped, let and const are blocked scoped.
-var can be updated and redeclared just like let can be updated but cannot be redeclared into the scope.
-let and const are block scope meaning they cannot be accessed outside a particular block excpet that the const variable can only be declared once but first must be initialized.

6. Variable Scope:
It refers to the availabilty of variables and functions in certain parts of the code. It can be global scope of local scope.
-local scope can only be accessed within a function
-global scope is a variable that is declared at the top of a program or outside of a function

7.
-The for loop is used to iterate through the array or the elements for a specified number of times. If a certain amount of iteration is known, it should be used.
-The forEach() method is also used to loop through arrays, but it uses a function differently than the classic “for loop”. It passes a callback function for each element of an array.


8. Hoisting allows us to extract values of variables of functions even before initializing/assigining value without getting errors. It allows us to call functions before even writing them in our code.

How to create a function called fullName that returns your full name and displays it
on the console:

let studentName = 'Ayabulela Sityata';

function fullName(studentName) {
    console.log(studentName);
}

fullName(studentName);


Question 2

let person = {
    firstName: 'Ayabulela',
    lastName: 'Sityata',
    age: 26,
}

console.log(person.firstName, person.lastName, person.age);



let subjects = ['Bootstrap,', 'JavaScript,', 'HTML & CSS'];

console.log(subjects[0], subjects[1], subjects[2]);




let homeAddress = {
    streetName: 'Shukuma Street',
    streetNumber: 45027,
    suburb: 'Khayelitsha',
    city: 'Cape Town',
    countryName: 'South Africa',
}

console.log(homeAddress.streetName, homeAddress.streetNumber, homeAddress.suburb, homeAddress.city, homeAddress.countryName);

Question 3
*/
function btnDisplay(){
    let number1 = document.querySelector("#number1").value
    let number2 = document.querySelector("#number2").value
    let operator = document.querySelector("#operator").value
    let result = document.querySelector("#ds-result")

    if (operator == "+"){
        result.innerText = number1 + number2;

    }else if (operator == "-"){
        result.innerText = number1 - number2;

    }else if (operator == "*"){
        result.innerText = number1 * number2;

    }else if (operator == "/"){
        result.innerText = number1 / number2;
    }
}