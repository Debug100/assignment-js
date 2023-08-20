//assignment-2
document.write("<h1 style='color: blue;font-size: 80px; font-weight: bold; text-align: center; font-family: Arial'>Elzero</h1>");

//assignment-3
console.log("%cElzero %cWeb %cSchool" , "color:red; font-size:40px" , "color:green; font-size:40px; font-weight:bold " ,"color:white; font-size:40px; background-color:blue");

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
console.table(["jon" , "tom" , "lionardo" , "misse" , "lemon"]);

//assignment-6

/*console.log("Iam In Console");
document.write("Iam In Page");*/
