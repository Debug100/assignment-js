//assignment-2
document.write(
  "<h1 style='color: blue;font-size: 80px; font-weight: bold; text-align: center; font-family: Arial'>Elzero</h1>"
);

//assignment-3
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red; font-size:40px",
  "color:green; font-size:40px; font-weight:bold ",
  "color:white; font-size:40px; background-color:blue"
);

//assignment-4
console.group("Group1");
console.log("Message one");
console.log("Message Two");

console.group("Child Group");
console.log("Message one");
console.log("Message Two");

console.group("Grand Child Group");
console.log("Message one");
console.log("Message Two");

console.groupEnd(); // Close the "Grand Child Group"
console.groupEnd(); // Close the "Child Group"
console.groupEnd(); // Close the "Group1"
console.groupEnd(); // Close the "Group1"

console.group("Group2"); // Start a new group "Group2"
console.log("Message one");
console.log("Message Two");
console.groupEnd(); // Close the "Group2"
//i do not understand what is going on? how just click to relod the page make different Response!

//assignment-5
console.table(["jon", "tom", "lionardo", "misse", "lemon"]);

//assignment-6

/*console.log("Iam In Console");
document.write("Iam In Page");*/

//1/9/2023-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//assignment 1===============================================================================
// Add Variables Here
let numberOne = 10;
let numberTwo = 20;
// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberOne + "\n" + numberTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberOne}
${numberTwo}`);
/*
  Template Literals Way
  20
  10
*/

//assignment 2=================================================================================
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//assignment 3==================================================================================
/*
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``*/

console.log(
  '\'\'I\'m In \n \\\\ \n Love \\\\ """ \'\'\' \n ++ With ++ \n \\"""\\""" \n ""Javascript""\'\'\''
);

//assignment 4====================================================================================
let c = 21;
let d = 20;
let result = `_${c}_`;
result += `${d}${c}_`.repeat(3);
result += `${d}_`;

console.log(); // _21_2021_2021_2021_20_
console.log(result);

// chalange class17===============================================================================
let DescriptionAaa = "Elzero Web School",
  DateAaa = "25/10",
  titleAaa = "Elzero";

let component17 = ` 
  <div>
    <h3${titleAaa}</h3>
    <p>${DescriptionAaa}</p>
    <span>${DateAaa}</span>
  </div>`.repeat(3);
document.write(component17);

//4/9/2023-------------------------------------------------------------------------------------------------------------

//assignment 1=================================
// Replace ? With Arithmetic Operators
let a10 = 10;
let a20 = 20;
let a15 = 15;
let a3 = 3;
let a190 = 190;
let a400 = 400;
console.log(++a10 * a20 - (++a15 + ++a3) + (a190 + --a10) - a400);
console.log(((10 * 20 * 15) % 3) * 190 * 400);

//assignment 2=====================================
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log(++num + --num - +true); // 6

// Soultion Four
console.log(num / num + ++num + true); // 6

// Solution Five
console.log(++num + +true); // 6

// Solution Six
console.log(++num); // 6

//assignment 3===========================================
let num2 = "10";
// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(++num2 + --num2 + -true); // 20

// Solution Three
console.log((num2 / num2 + +true) * num2); // 20

// Solution Four
console.log(+num2 + --num2 + --num2 - --num2); // 20

//assignment 4============================================
let points = 10;

// Write Your Code Here

points += 3;

console.log(points); // 13

// Write Your Code Here

points -= 5;

console.log(points); // 8;

// 14/9/2023

//assignment 1==================================================
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.max(500,100,100000)); // 100000
console.log(Math.round(parseFloat(100000.4))); // 100000
console.log(10 ** 5); // 100000
console.log(+(100000.4444).toFixed()); // 100000
console.log(Number("100000")); // 100000
console.log(parseInt(100000.99)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.round(100000,4)); // 100000
console.log(Math.trunc(100000.555)); // 100000

//assignment 2==================================================
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//assignment 3==================================================
console.log(
  (++Number.MAX_SAFE_INTEGER + ++Number.MIN_SAFE_INTEGER) *
    (++Number.MAX_SAFE_INTEGER + ++Number.MIN_SAFE_INTEGER) *
    (++Number.MAX_SAFE_INTEGER + ++Number.MIN_SAFE_INTEGER) *
    (++Number.MAX_SAFE_INTEGER + ++Number.MIN_SAFE_INTEGER)
); // 16
console.log(`${Number.MAX_SAFE_INTEGER}`.length) 
console.log(Number.MAX_SAFE_INTEGER.toFixed().length)

//assignment 4==================================================
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

//assignment 5===================================================
let num1 = 10;

console.log(+(Number.isInteger(num1)) + +(Number.isInteger(num1))); // 2

//assignment 6===================================================
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+flt.toFixed(0)); // 10

//assignment 7=====================================================
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
Math.floor(Math.random() * 5);

//==============================================================================================================================

//assignment 1=======================================================
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0 ,1).toLowerCase()); // e
console.log(userName.substring(0 ,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee

//assignment 2=======================================================
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

