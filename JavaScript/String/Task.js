//! Find the length of "JavaScript".

let str1 = "JavaScript"
console.log(str1.length);



// Find the length of "Hello World".

let str2 = "Hello World";

console.log(str2.length);

// Find the length of "Hello World".


let cleanStr = str2.replaceAll(" ","");

console.log(cleanStr.length);


// Convert "javascript" to uppercase.

console.log(str1.toUpperCase());

// Convert "JAVASCRIPT" to lowercase.

let str3 = "JAVASCRIPT";

console.log(str3.toLocaleLowerCase());


// Print the first character of "JavaScript".

console.log(str1.charAt(0));

// Print the third character of "Omkar".

let str4 = "Omkar";

console.log(str4.charAt(2));


// Find the index of "S" in "JavaScript".

console.log(str1.indexOf("S"));


// Find the last index of "a" in "JavaScript".

console.log(str1.lastIndexOf("a"));


// Check if "JavaScript" contains "Script".

console.log(str1.includes("Script"));


// Check if "JavaScript" starts with "Java".

console.log(str1.startsWith("Java"));

// Check if "JavaScript" ends with "Script".


console.log(str1.endsWith("Script"));


// Extract "Java" from "JavaScript".


let str5 = "JavaScript" ;

console.log(str5.slice(0,4));



// Replace "Java" with "Type" in "JavaScript"


let str6 = "JavaScript"

console.log(str6.replaceAll("Java","Type"));


// Split "HTML,CSS,JS" into an array.

let str7 = "HTML,CSS,JS";

console.log(str7.split(","));


// Split "apple-banana-mango" by -.

let str8 = "apple-banana-mango";

console.log(str8.split("-"));

// Remove spaces from " Omkar ".

let str9 = " Omkar ";

console.log(str9);
console.log(str9.trim());


// Join "Hello" and "World".

let str10 = "Hello";

let str11 = "World"

console.log(str10.concat( " " + str11));



// Count how many times "a" appears in "JavaScript".


let str12 = "JavaScript";

let splits = str12.split("")

let Count = splits.reduce(( acc,value)=>{
    
    return value === "a"? acc+1 : acc;
},0)

console.log(Count);


// Reverse the string "JavaScript".


let str13 = "JavaScript";

let Reverse = str13.split("").reverse().join("")

console.log(Reverse);


// Check if "madam" is a palindrome.

let str14 = "madam";

let palindrome = str14.split("").reverse().join("");

if (str14 === palindrome) {
    console.log("it is palindrome!");
} else {
    console.log("it is not palindrome");
}


// Capitalize the first letter of "javascript".
let str15 = "javascript";

let operation = str15.charAt(0).toUpperCase() + str1.slice(1,str15.length)

console.log(operation);


// Count the number of words in "I am learning JavaScript".

let str16 = "I am learning JavaScript"

let Count1 = str16.replaceAll(" ","");
console.log(Count1.length);


// Convert "frontend_developer" to "frontend developer".

let str17 = "frontend_developer";
console.log(str17.replace("_"," "));


// Find the longest word in "I love learning JavaScript programming".

let str18 = "I love learning JavaScript programming";

let lengthcount = str18.split(" ");

let finds = lengthcount.reduce((longest, value) => {
    
    return value.length > longest.length ? value : longest;

}, "");

console.log(finds);
