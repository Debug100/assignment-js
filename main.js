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

console.log( "\'\'I\'m In \n \\\\ \n Love \\\\ \"\"\" \'\'\' \n \+\+ With \+\+ \n \\\"\"\"\\\"\"\" \n \"\"Javascript\"\"\'\'\'");

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
    <h3>${titleAaa}</h3>
    <p>${DescriptionAaa}</p>
    <span>${DateAaa}</span>
  </div>`.repeat(3);
document.write(component17 );
