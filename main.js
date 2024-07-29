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
// console.log(userName(0, 1).toLowerCase()); // e
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
  if (theAge <= 10 || theAge >= 100) {
    console.log("Age Out Of Range");
  } else {
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
  for (let i = 0; i <= allMonth.length; i++) {
    if (monthNumber === i) {
      monthNumber = allMonth[i];
      // return allMonth[i];
    }
  }
  return monthNumber;
};

console.log(monthName(4));

function calc(num1, num2) {
  return num1 + num2;
}

console.log(calc(10, 20));

// week 9

console.log("Task 1====================================🧐");

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `${zName.slice(0, zName.indexOf(" "))}${zName
      .substr(zName.indexOf(" "), 2)
      .toUpperCase()}`;
    // return `${zName.split(" ")[0]} ${zName.split(" ")[1][0].toUpperCase()}`;
  }

  function ageWithMessage(zAge) {
    return `Your Age Is ${zAge.split(" ")[0]}`;
  }

  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }

  function fullDetails() {
    return (
      namePattern(zName) +
      "," +
      ageWithMessage(zAge) +
      " ," +
      countryTwoLetters(zCountry)
    );
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));

console.log("Task 2 ========================================😁");

function itsMe1() {
  return `Iam A Normal Function`;
}

const itsMe2 = () => `Iam An Arrow Function`;

console.log(itsMe1()); // Iam A Normal Function
console.log(itsMe2()); // Iam An Arrow Function

function urlCreate1(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}
let urlCreate2 = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate1("https", "elzero", "org")); // https://www.elzero.org
console.log(urlCreate2("https", "elzero", "org")); // https://www.elzero.org

console.log("Task 3 ========================================😁");

function checker1(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}

const checker2 = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker1("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker1("Ahmed")("Not Available")()); // Iam Not Avaialble
console.log(checker2("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker2("Ahmed")("Not Available")()); // Iam Not Avaialble

console.log("Task 4 ========================================😭 ");

function specialMix(...data) {
  let sum = 0;
  let allStrings = true;

  for (i = 0; i < data.length; i++) {
    if (!isNaN(parseInt(data[i]))) {
      data[i] = parseInt(data[i]);
      sum += data[i];
      allStrings = false;
    }
  }

  if (allStrings) {
    return "All Is String";
  }

  return sum;
}

console.log(specialMix(1, "j", 2, "k")); // 60
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); //All Is String

// week 10

console.log("assignment 1=====================");

let mix1 = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

mix1 = mix1
  .map(function (ele) {
    return isNaN(ele) ? ele : "";
  })
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(mix1);
// Elzero

console.log("assignment 2=====================");

let myString = "EElllzzzzzzzeroo";

myNewString = myString
  .split("")
  .filter(function (letter, index) {
    return myString.indexOf(letter) === index;
  })
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(myNewString);
// Elzero

console.log("assingment 3===================");
let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let sum = myArray.reduce(function (acc, current) {
//   console.log("acc =" + acc);
//   console.log(current);
//   return acc.concat(current);
// });

let sum = myArray.reduce(function (acc, current) {
  if (Array.isArray(current)) {
    current = current.join("");
  }
  return acc + current;
});

console.log(sum);
// Elzero

// tasks from teacher to learn===========================================================
result = [1, 2, 3];
sum = result.reduce(function (acc, current) {
  return acc + current;
});

console.log(sum);

function sum2(a, b, c) {
  return a + b + c;
}
console.log(sum2(1, 2, 3));

function sum3(a, b, c) {
  for (i = 0; i < sum3.length; i++) {
    // console.log(sum3[i]);
    result += sum3[i];
  }
  return result;
}

console.log(sum3(1, 2, 3));

function sayHello(name) {
  return ` Hello! ${name}🤨`;
}

console.log(sayHello("me"));

function countDown(num) {
  if (num > 0) {
    return num;
  }
  console.log("num:", num);
  countDown(num - 1);
}

//the end tasks from teacher to learn=========================================================

console.log("assignment 4============================================");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newNumsAndStrings = numsAndStrings
  .filter(function (el) {
    return !isNaN(el) ? el : "";
  })
  .map(function (element) {
    return -element;
  });
console.log(newNumsAndStrings);
// [-1, -10, 10, 20, -5, -3]

console.log("assignment 5===============================================");

let nums = [2, 12, 11, 5, 10, 1, 99];

let oddNums = nums.reduce(function (acc, current) {
  if (current % 2 == 0) {
    return current * acc;
  } else if (current % 2 !== 0) {
    return current + acc;
  }
}, 1);

console.log(oddNums);
// 500

//week11
console.log("assignment1=================================================");
// Create Your Object Here
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `MyName Is ${this.name} , My Age Is ${this.age} , I Live in ${this.country}`;
  },
};
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

console.log("assignment 2==================================================");
// Method One
// Create Your Object Here
let objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = {};
(objMethodTwo.property = "Method Two"), console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({});
(objMethodThree.property = "Method Three"),
  console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({ property: "Method Four" });

console.log(objMethodFour.property); // "Method Four"

console.log("assignment 3============================================");
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
finalObject = Object.assign({}, { a }, threeNums, twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

console.log("assignment 4 ==================================");

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
console.log(objectLength);

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${Object.entries(myFavGames)[i][1].publisher}`);
  console.log(`The Price Is ${Object.entries(myFavGames)[i][1].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (
    i > 0 &&
    Object.keys(Object.entries(myFavGames)[1][1].bestThree).length > 0
  ) {
    console.log("- Game Has Releases");
    console.log(`First => ${Object.entries(myFavGames)[i][1].bestThree.one}`);
    console.log(`Second => ${Object.entries(myFavGames)[i][1].bestThree.two}`);
    console.log(`Third => ${Object.entries(myFavGames)[i][1].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Ouput

("The Game Name Is Trinity Universe");
("The Publisher Is NIS America");
("The Price Is 40");
("####################");
("The Game Name Is Titan Quest");
("The Publisher Is THQ");
("The Price Is 50");
("- Game Has Releases");
("First => Immortal Throne");
("Second => Ragnarök");
("Third => Atlantis");
("####################");
("The Game Name Is YS");
("The Publisher Is Falcom");
("The Price Is 40");
("- Game Has Releases");
("First => Oath in Felghana");
("Second => Ark Of Napishtim");
("Third => origin");
("####################");

// console.log(Object.values(Object.entries(myFavGames)[0][1]));
// console.log(Object.values(Object.entries(myFavGames)[0][1])[0]); //puplisher
// console.log(Object.values(Object.entries(myFavGames)[0][1])[1]); //price

// console.log(Object.values(Object.entries(myFavGames)[1][1]));
// console.log(Object.values(Object.entries(myFavGames)[1][1])[0]); // puplisher
// console.log(Object.values(Object.entries(myFavGames)[1][1])[2]); // price

// console.log(Object.values(Object.entries(myFavGames)[2][1]));
// console.log(Object.values(Object.entries(myFavGames)[2][1])[0]); // puplisher
// console.log(Object.values(Object.entries(myFavGames)[2][1])[2]); // price

// console.log(Object.values(Object.entries(myFavGames)[0][1])[0]); //puplisher
// console.log(Object.values(Object.entries(myFavGames)[1][1])[0]); // puplisher
// console.log(Object.values(Object.entries(myFavGames)[2][1])[0]); // puplisher

// console.log(Object.values(Object.entries(myFavGames)[0][1])[1]); //price
// console.log(Object.values(Object.entries(myFavGames)[1][1])[2]); // price
// console.log(Object.values(Object.entries(myFavGames)[2][1])[2]); // price

// console.log(Object.entries(myFavGames)[0][1].publisher);
// console.log(Object.entries(myFavGames)[1][1].publisher);
// console.log(Object.entries(myFavGames)[2][1].publisher);

// console.log(Object.keys(Object.entries(myFavGames)[1][1].bestThree).length);
// console.log(Object.keys(Object.entries(myFavGames)[2][1].bestThree).length);

// console.log((Object.entries(myFavGames)[2][1].bestThree.one));

//week 12

console.log("assignment 1 ==================================");

console.log(document.querySelectorAll("div")[1]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("#elzero1")[0]);
console.log(document.querySelectorAll("[name='js']")[0]);

console.log(document.querySelector("div")); //return first element
console.log(document.querySelector("[id='elzero1']"));
console.log(document.querySelector("[name='js']"));
console.log(document.querySelector("[class='element']"));

console.log(document.getElementsByTagName("div")[1]);
console.log(document.getElementById("elzero1"));
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByName("js")[0]);

console.log(document.body.children[2]);
console.log(document.body.childNodes[9]);

console.log("assignment 2 ==================================");

let element = document.querySelectorAll("[decoding='async']");

for (i = 0; i < element.length; i++) {
  element[i].setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  element[i].setAttribute("alt", "Elzero Logo");
  element[i].style.cssText = "background-color:gray";
}

console.log(element);

console.log("assignment 3 ==================================");

let inputElement = document.querySelector("[name='dollar']");

inputElement.oninput = function () {
  let inputInDollar = (inputElement.value * 15.6).toFixed(2);
  document.querySelector(
    ".result"
  ).innerHTML = `{ ${inputElement.value} } USD Dollar = {${inputInDollar}} Egyptian Pound`;
};

console.log("assignment 4 ==================================");

// Select elements with classes ".one" and ".two"
let firstDiv = document.querySelector(".one");
let secondDiv = document.querySelector(".two");

// Add "2" next to the word "Two" in the firstDiv
let tempContent = firstDiv.textContent;

console.log(--tempContent.length);

// Swap the contents of the two divs
firstDiv.innerHTML = secondDiv.innerHTML;
secondDiv.innerHTML = tempContent + " " + --tempContent.length;

// Swap the title attributes of the two divs
let tempTitle = firstDiv.title;
firstDiv.title = secondDiv.title;
secondDiv.title = tempTitle;

console.log(document.querySelector(".two").getAttribute("title"));

console.log("assignment 5 ==================================");

for (i = 0; i < 5; i++) {
  if (document.querySelectorAll("[decoding='async1']")[i].hasAttribute("alt")) {
    document
      .querySelectorAll("[decoding='async1']")
      [i].setAttribute("alt", "old");
  } else {
    document
      .querySelectorAll("[decoding='async1']")
      [i].setAttribute("alt", "Elzero New");
  }
}

console.log("assignment 6 ==================================");

//css style for the form
let formChildren = document.querySelectorAll("form")[1].children;
for (i = 0; i < formChildren.length; i++) {
  if (formChildren[i] !== document.querySelector(".results")) {
    formChildren[i].style.cssText =
      "display: block;width: 300px;height: 40px;margin: 10px auto;padding: 5px;border: 1px solid #80808073;box-sizing: border-box;";
  }
}

document.querySelector("[name='create']").style.cssText +=
  "background-color:#009688e3;color:white;";

// prevent create submit from refrach the page
let results = document.querySelector(".results");

document.querySelector("[name='create']").onclick = function (event) {
  event.preventDefault();

  // clear pervious resluts
  results.innerHTML = "";

  //control numbers  and content of Elements dynamic
  let elementNumbers = document.querySelector("[name='elements']").value;
  let elementText = document.querySelector("[name='texts']").value;
  let elementType = document.querySelector("[name='type']").value;

  // create Element
  for (i = 1; i <= elementNumbers; i++) {
    // create div or section depends on
    let myElement;
    if (elementType === "Div") {
      myElement = document.createElement("div");
    } else if (elementType === "Section") {
      myElement = document.createElement("section");
    }

    myElement.setAttribute("title", "Element");
    myElement.setAttribute("class", "box");
    myElement.setAttribute("id", "id-" + [i]);

    // append Element to the div inside the result
    let myText = document.createTextNode(elementText);
    myElement.appendChild(myText);
    results.appendChild(myElement);

    // css style for myElment (the resluts)
    results.style.cssText =
      "display:flex; width:auto-fit; margin:0 10%;justify-content:space-between;text-align: center;flex-wrap: wrap;box-sizing:border-box;";
    myElement.style.cssText =
      "width: 350px;height:55px;background-color: #ff6900;color: white;margin:5px; border-radius:6px;line-height:55px;";
  }
};

// week 13

console.log("assignment 1=========================================");
// for (i = 0; i < 2; i++) {
//   let shit = document.getElementsByClassName("open")[i];

//   if (shit.textContent.includes("Elzero")) {
//     console.log("please say hello ");
//     window.location.href = shit.href;
//     console.log(shit.href);
//   }
// }

console.log("assignment 2==========================================");

let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let ClassListResult = document.querySelector(".classes-list").children[1];

let classNameList = [];

function updateHtmlClassNames() {
  ClassListResult.textContent = "";
  classNameList.sort();
  for (let i = 0; i < classNameList.length; i++) {
    const span = document.createElement("span");
    span.textContent = classNameList[i];
    ClassListResult.append(span);
  }
  ClassListResult.className = classNameList.join(" ");
}

// // show classList in current elemnt list
let ClassListResultSpan = document.createElement("span");
ClassListResult.append(ClassListResultSpan);

if (addInput.value === "") {
  ClassListResultSpan.textContent = "No Classes To Show";
}

addInput.addEventListener("blur", function () {
  const words = addInput.value.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    const className = words[i];
    if (className !== "" && classNameList.includes(className) === false) {
      //This prevents duplicates and ensures only valid class names are added.
      classNameList.push(className);
    }
  }
  updateHtmlClassNames();
  addInput.value = "";
  // ClassListResult.classList.add(...classNameList);
});

removeInput.addEventListener("blur", function () {
  const words = removeInput.value.toLowerCase().split(" ");
  for (let i = 0; i < classNameList.length; i++) {
    if (words.includes(classNameList[i])) {
      classNameList.splice(i, 1);
      // option 2 - remove from html tags and update final classes sorted
    }
  }
  updateHtmlClassNames();
  removeInput.value = "";
  // ClassListResult.classList.remove(...words);
});

// // WITHOUT SORT
// addInput.addEventListener("blur",function(){
//   const words = addInput.value.toLowerCase().split(" ")
//   for (let i = 0; i < words.length; i++){
//     const className = words[i]
//     if (className !== '' && ClassListResult.textContent.includes(className) === false) {
//       const span = document.createElement("span")
//       span.textContent = className
//       ClassListResult.append(span)
//     }
//   }
//   addInput.value = ''
// })

console.log("assignment 3==========================================");
//remove pargrapgh
let myP = document.querySelectorAll("p")[0];
myP.remove();

// create elment beofre and after the div
let ourElement = document.querySelector(".our-element");

let myDivStart = document.createElement("div");
myDivStart.className = "start";
myDivStart.textContent = "Start";
myDivStart.setAttribute("title", "Start Element");
myDivStart.setAttribute("data-value", "Start");

let myDivEnd = document.createElement("div");
myDivEnd.className = "end";
myDivEnd.textContent = "End";
myDivEnd.setAttribute("title", "End Element");
myDivEnd.setAttribute("data-value", "End");

// add Elment befor or after the div out of div not inside it
ourElement.after(myDivEnd);
ourElement.before(myDivStart);

console.log("assignment 4==========================================");
console.log(document.querySelectorAll("div")[23].lastChild.nodeValue.trim()); // its remove the new line and the space its really superhero 😎

console.log("assignment 5=============================================");

document.querySelectorAll("div")[24].onclick = function () {
  console.log("This is div");
};

document.querySelectorAll("span")[1].onclick = function () {
  console.log("This is sapn");
};

document.querySelectorAll("p")[0].onclick = function () {
  console.log("This is p");
};

document.querySelectorAll("section")[0].onclick = function () {
  console.log("This is section");
};

document.querySelectorAll("article")[0].onclick = function () {
  console.log("This is article");
};

// my teacher task  I have a smaller task for you..
//  create an empty page, add a input text element there...
//  and when the user focus on the input your page background color will be green,
//  and when the user move the focus away - blur event listener - your page background color wil be gray
// not you can try to get the input of what the user typed and set the text as the background color of your page 😉

let myInput = document.createElement("input");
document.body.append(myInput);

myInput.addEventListener("input", function () {
  document.body.style.backgroundColor = myInput.value;
});

myInput.addEventListener("blur", function () {
  document.body.style.backgroundColor = "gray";
  console.log(myInput.value);
});

//week 14
console.log("assignment 1 ================================ 14");

// let promptMsg = prompt("Print Number From - To", "Example: 5-20");

// promptMsg = promptMsg.split("-");
// promptMsg = promptMsg.map(Number);
// console.log(promptMsg); // turn to array and saperte each single letter

// for (i = 0; i < promptMsg.length; i++) {
//   let max;
//   let min;

//   if (promptMsg[0] > promptMsg[1]) {
//     max = promptMsg[0];
//   } else {
//     max = promptMsg[1];
//   }

//   if (promptMsg[0] < promptMsg[1]) {
//     min = promptMsg[0];
//   } else {
//     min = promptMsg[1];
//   }

//   for (j = 0; j < max; j++) {
//     console.log(min++);
//     if (min > max) {
//       break;
//     }
//   }
//   break;
// }

// let promptMsg = prompt("Print Number From - To", "Example: 5-20");
// let [num_1, num_2] = promptMsg.split("-").map(Number);

// let min = Math.min(num_1, num_2);
// let max = Math.max(num_1, num_2);

// console.log(`Range: ${min} to ${max}`);

// for (let i = min; i <= max; i++) {
//   console.log(i);
// }

console.log("assignment 2==============================14");
let createPopup = document.createElement("div");
createPopup.textContent = "Welcome";
createPopup.className = "createPopup";

let createPopupParagraph = document.createElement("p");
createPopupParagraph.textContent = "Welcome To Elzero Web School🐄😭";

createPopup.append(createPopupParagraph);
document.body.append(createPopup);

//create the exit button
let iconXmark = document.querySelector(".fa-xmark");
iconXmark.style.display = "none";

window.onload = setTimeout(function () {
  createPopup.style.display = "block";
  iconXmark.style.display = "block";
}, 5000);

iconXmark.onclick = function () {
  createPopup.style.display = "none";
  iconXmark.style.display = "none";
};

console.log("assignment 3=======================================14");
// let divTen = document.createElement("div");
// divTen.textContent = 3;

// document.body.append(divTen);
  
// function countdown() {
//   divTen.innerHTML -= 1;
//   if (divTen.innerHTML === "0") {
//     clearInterval(counter4);
//     window.open(
//       "https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/#google_vignette" , "" , "width=400,height=400,left=600,top=118"
//     );
//   }
// }

// let counter4 = setInterval(countdown, 1000);
