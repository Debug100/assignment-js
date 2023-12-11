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
console.log(Math.max(500, 100, 100000)); // 100000
console.log(Math.round(parseFloat(100000.4))); // 100000
console.log(10 ** 5); // 100000
console.log(+(100000.4444).toFixed()); // 100000
console.log(Number("100000")); // 100000
console.log(parseInt(100000.99)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.round(100000, 4)); // 100000
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
console.log(`${Number.MAX_SAFE_INTEGER}`.length);
console.log(Number.MAX_SAFE_INTEGER.toFixed().length);

//assignment 4==================================================
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

//assignment 5===================================================
let num1 = 10;

console.log(+Number.isInteger(num1) + +Number.isInteger(num1)); // 2

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
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee

//assignment 2=======================================================
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

//16/9/2023

// 31 / 32

//assignment 1========================================================
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(-(-50) > +"-40"); // true
console.log(+10 <= -"-40"); // true
console.log(+"10" === 10); // true
console.log(!(20 == false)); // true

//assignment 2========================================================
let num3 = 10;
let num4 = 20;

console.log(num3 != num4); // true
console.log(num3 !== num4); // true
console.log(num4 > num3); // true
console.log(num3 < num4); // true
console.log(typeof num3 === typeof num4); // true
console.log(num3 == num4 - num3); // true

//assignment 3========================================================
let a1 = 20;
let b1 = 30;
let c1 = 10;

console.log((a1 != b1 && a1 > c1) || a1 == b1); // true
console.log(a1 <= b1 || a1 == c1); // true
console.log(!(a1 > b1) && !(a1 == b1) && !(a1 == c1) && !(a1 == c1)); // true

//==============================================================================================================================

// 33 /37

//assignment 1=========================================================

// Test Case 1
let num5 = 20; // "009"

if (num5 < 10) {
  console.log(`00${num5}`);
  5;
} else if (num5 > 10 && num5 < 100) {
  console.log(`0${num5}`);
} else if (num5 >= 100) {
  console.log(num5);
}

//assignment 2=============================================================

let num8 = 9;
let str = "9";
let str2 = "20";

// Output
("{num8} Is The Same Value As {str}");
("{num8} Is The Same Value As {str} But Not The Same Type");
("{num8} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");

if (num8 == str) {
  console.log(`{num8} Is The Same Value As {str}`);
}

if (num8 == str && num8 !== str) {
  console.log(`{num8} Is The Same Value As {str} But Not The Same Type`);
}

if (num8 != str2 || num8 !== str2) {
  console.log(`{num8} Is Not The Same Value Or The Same Type As {str2}`);
}

if (typeof str === typeof str2 && str != str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

//assignment 3============================================================

let num9 = 10;
let num10 = 30;
let num11 = "30";

// Needed Output
("30 Is Larger Than 10 And Type string Not The Same Type As number");
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

if (num11 > num9 && num11 !== num9 && num11 == num10 && num11 !== num10) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number" +
      "\n" +
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number" +
      "\n" +
      "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}

//assignment 4===============================================================

// Edit What You Want Here

let num1a = 1;
let num2a = 0;
let num3a = +"1";
let num4a = 23;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1a > num2a) {
  console.log("True");
} else {
  console.log("False");
}

// num1a = 11 [pre increment]

// Condition 2

if (num1a > num2a && num1a < num4a) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1a > num2a && num1a === num3a) {
  console.log("True");
} else {
  console.log("False");
}
//num1a = 10
// Condition 4

if (num1a + num2a < num4a) {
  console.log("True");
} else {
  console.log("False");
}
//numa1 = 9
// Condition 5

if (num1a + num3a < num4a) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1a + num2a + num3a < num4a) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4a - (num1a + num3a) + num2a === 21) {
  console.log("True");
} else {
  console.log("False");
}

// 38 / 39

let day = "   friday  ";

day = day.trim();
day = day.charAt(0).toUpperCase() + day.substring(1); // هيقطع من واحد لحد الاخر
console.log(day);
// You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

// let day= "  World";
// Output => "Its Not A Valid Day"

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  case "World":
    console.log("Its Not A Valid Day");
    break;
}

// 30 / 9 / 2023=========================================================================================
// 40 / 47 Array=========================================================================================

//assignment 1==============================
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let numA = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), numA)); // ["Ahmed", "Elham", "Osama"];

myFriends.pop();
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//assignment 2===============================
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]

//assignment 3================================
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse(); // anthor solution
finalArr = [arrTwo.pop()].concat(arrOne.reverse(), arrTwo.reverse());

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//assignment 4==================================
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop()[0].slice(website.length).toUpperCase()); // ZERO

//assignment 5===================================
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle)) {
  console.log("found");
} else {
  console.log("lol😎");
}

if (haystack.indexOf(needle) === 1) {
  console.log("found");
} else {
  console.log("lol😎");
}
if (haystack.lastIndexOf(needle) === 1) {
  console.log("found");
} else {
  console.log("lol😎");
}
if (needle === haystack[1]) {
  console.log("found");
}
//assignment 6======================================
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

arr2.shift();
arr2.shift();
allArrs = arr2.shift().concat(arr1.pop(), arr2).toLowerCase();
console.log(allArrs); // fxy

// 27 /10 / 2023
//  48 /53

document.write(`<h2>assignment1===========================</h2>`);

let start = 10;
let end = 100;
let exclude = 40;

// Output
// 10;
// 20;
// 30;
// 50;
// 60;
// 70;
// 80;
// 90;
// 100;

for (i = start; i <= end; i += start) {
  if (i !== exclude) {
    document.write(`<p>${i}</p>`);
  }
}

document.write(`<h2>assignment2===========================</h2>`);

let start1 = 10;
let end1 = 0;
let stop1 = 3;

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

for (i = start1; i >= stop1; i--) {
  document.write(`<p>${i}</p>`);
}

document.write(`<h2>assignment3===========================</h2>`);
let start2 = 1;
let end2 = 6;
let breaker2 = 2;

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
for (i = start2; i <= end2; i++) {
  document.write(`<p>${i}</p>`);
  for (j = breaker2; j < end2; j += breaker2) {
    document.write(`<p>  --  ${j}</p>`);
  }
}

document.write(`<h2>assignment4===========================</h2>`);
let index = 10;
let jump = 2;

for (;;) {
  if (index > 2) {
    document.write(`<p>${index}</p>`);
  } else {
    break;
  }
  index -= jump;
}

// Output
// 10;
// 8;
// 6;
// 4;

document.write(`<h2>assignment5===========================</h2>`);
let friends2 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

for (i = letter.indexOf("a"); i < friends2.length; i++) {
  if (friends2[i].indexOf(letter.toUpperCase()) != -letter.length) {
    continue;
  }
  document.write(`<p>${friends2[i]}</p>`);
}

document.write(`<h2>assignment6===========================</h2>`);
let start3 = 0;
let swappedName = "elZerO";

// Output
// "ELzERo"

for (i = start3; i < swappedName.length; i++) {
  let character = swappedName[i];
  if (character === swappedName[i].toLowerCase()) {
    document.write(character.toUpperCase());
  } else if (character === swappedName[i].toUpperCase()) {
    document.write(character.toLocaleLowerCase());
  }
}

document.write(`<h2>assignment7===========================</h2>`);
let start4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
2;
3;
4;
// i = ++start4 ;
i = 0;
for (; i < mix.length; i++) {
  if ([i] == 0) {
    continue;
  }
  if (typeof mix[i] === "string") {
    continue;
  }
  document.write(`<p>${mix[i]}</p>`);
}

document.write(`<h2>assignment8===========================</h2>`);

let friends1 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
let counter = 0;

// Output
("1 => Sayed");
("2 => Mahmoud");

while (index1 < friends1.length) {
  // friends1.sort();
  if (
    typeof friends1[index1] === "number" ||
    friends1[index1].startsWith("A")
  ) {
    index1++;
    continue;
  }
  document.write(`<div>"${++counter} => ${friends1[index1]}"</div>`);
  index1++;
}

// الاسبوع 8
// 26/11/2023
// 57 / 63

document.write(`<h2>assignment1===========================</h2>`);

function sayHello(theName, theGender) {
  if (theGender == "Male") {
    theGender = "Mr";
  } else if (theGender === "Female") {
    theGender = "Miss";
  } else {
    theGender = "";
  }
  document.write(`<div>Hello ${theGender} ${theName} </div>`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

document.write(`<h2>assignment2===========================</h2>`);

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    document.write("Second Number Not Found");
  }
  if (operation === "add") {
    operation = firstNum + secondNum;
    document.write(`<div>${operation}</div>`);
  } else if (operation === undefined) {
    operation = firstNum + secondNum;
    document.write(`<div>${operation}</div>`);
  }
  if (operation === "subtract") {
    operation = firstNum - secondNum;
    document.write(`<div>${operation}</div>`);
  }
  if (operation === "multiply") {
    operation = firstNum * secondNum;
    document.write(`<div>${operation}</div>`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

document.write(`<h2>assignment3===========================</h2>`);
// function ageInTime(theAge) {
//   let birthYear = 2000;
//   let birthMonth = 4;
//   let birthDay = 11;
//   let birthHour = 6;
//   let birthMinutes = 15;
//   let birthSecond = 59;

//   let currentYear = 2023;
//   let currentMonth = 12;
//   let currentDay = 4;
//   let currentHour = 23;
//   let currentMiuntes = 30;
//   let currentSecond = 20;

//   let years = currentYear - birthYear;
//   let months = years * 12 - (birthMonth + (12 - currentMonth));
//   let days = months * 30 - (birthDay + (30 - currentDay));
//   let hours = days * 24 - (birthHour + (24 - currentHour));
//   let minutes = hours * 60 - (birthMinutes + (60 - currentMiuntes));
//   let seconds = minutes * 60 - (birthSecond + (60 - currentSecond));

//   if (years <= 10 || years >= 100){
//     theAge = "Age Out Of Range"
//   }else{
//     theAge = `Year:${years}\nMonth:${months}\nDay:${days}\nHours:${hours}\nMinutes:${minutes}\nSeconds:${seconds}`;
//   }


//   return theAge;
// }
// console.log(ageInTime());

// Needed Output
// ageInTime(24); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

function ageInTime(theAge) {
  if (theAge <= 10 || theAge >= 100){
    console.log( "Age Out Of Range")
  }else{
    console.log(`You Have ${theAge} Years`);
    console.log(`You Have ${theAge * 12} Months`);
    console.log(`You Have ${theAge * 12 * 4} Week`);
    console.log(`You Have ${theAge * 12 * 4 * 7} Days`);
    console.log(`You Have ${theAge * 12 * 4 * 7 * 24} Hours`);
    console.log(`You Have ${theAge * 12 * 4 * 7 * 24 * 60} Minutes`);
    console.log(`You Have ${theAge * 12 * 4 * 7 * 24 * 60 * 60} Seconds`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(31); // Months Example => 456 Months

document.write(`<h2>assignment4===========================</h2>`);
function checkStatus(a, b, c) {
  var abc = [a, b, c];
  for (i = 0; i < abc.length; i++) {
    if (typeof abc[i] === "string") {
      a = abc[i];
    }
    if (typeof abc[i] === "number") {
      b = abc[i];
    }
    if (typeof abc[i] === "boolean") {
      c = abc[i];
      if (c === true) {
        c = ` You Are Available For Hire`;
      } else if (c === false) {
        c = `You Are Not Available For Hire`;
      }
    }
  }
  document.write(` <div> Hello ${a}, Your Age Is ${b} , ${c} </div>`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

document.write(`<h2>assignment5===========================</h2>`);
function createSelectBox(startYear, endYear) {
  createSelectBox = [startYear, endYear];
  document.write(`<select>`);
  for (i = startYear; i <= endYear; i++) {
    document.write(`<option>${i}<option/>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

document.write(`<h2>assignment6===========================</h2>`);
function multiply(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      continue;
    }
    numbers[i] = Math.floor(numbers[i]);
    result = numbers[i] * numbers[++i];
    document.write(`<div>${result}</div>`);
  }
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

function transformation(...numbers) {
  let month = 10;
  month = numbers[month - 1];
  console.log(month);
}

transformation(
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
);
const monthName = function myAwesomeFunction(monthNumber) {
  let allMonth = [
    "Unknown",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for ( let i = 0; i <= allMonth.length; i++) {
    if (monthNumber === i) {
      monthNumber = allMonth[i];
      // return allMonth[i];
    }
  }
  return monthNumber;
}

console.log(monthName(4));
