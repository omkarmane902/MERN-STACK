// Copy an Array


const numbers = [10, 20, 30, 40];


console.log(...numbers);


// Task 2: Merge Two Arrays

const arr1 = [10, 20];
const arr2 = [30, 40];

const newarr = [...arr1,...arr2]

console.log(newarr);



// Task 3: Add Elements at Beginning
const numberss = [30, 40, 50];



numberss.unshift(10,20)

console.log( numberss);


// Task 4: Add Elements at End

const num = [10, 20, 30];

num.push(40,50);

console.log(num);



// Task 7: Merge Two Objects

const obj1 = { name: "Omkar" };
const obj2 = { age: 22 };


const obj3 = {
    ...obj1,...obj2
}

console.log(obj3);


// ask 8: Add New Property

const student = {
  name: "Omkar",
  age: 22
};

student. city = "Kolhapur"


console.log(student);


// 🟢 Bracket Notation चा वापर करून नवीन प्रॉपर्टी जोडली
student["city"] = "Kolhapur";

console.log(student);

