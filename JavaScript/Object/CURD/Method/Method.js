const student = {
  id: 1,
  name: "Omkar",
  age: 22,
  course: "JavaScript",
  marks: 90,
  isPassed: true,

  address: {
    city: "Kolhapur",
    state: "Maharashtra"
  },

  skills: ["HTML", "CSS", "JavaScript"],

  greet() {
    return `Hello, ${this.name}!`;
  }
};


// Print all keys of the student object.
console.log(Object.keys(student));

// Q2. Count the total number of keys.
console.log(Object.keys(student).length);


// Q3. Print the first key of the student object.

let key = Object.keys(student)
console.log(key[0]);



// Q4. Print the last key of the student object.

let keyss = Object.keys(student)

console.log(keyss[keyss.length -1]);


//! 2. Object.values()

// Print all values of the student object.

console.log(Object.values(student));

// Count the total number of values.

console.log(Object.values(student).length);



let firstval = Object.values(student)
console.log(firstval[0]);



// Print the last value.

let lastval = Object.values(student)

console.log(lastval[lastval.length-1]);


// Check whether the value "Omkar" exists.

let allValues = Object.values(student);

let exist = allValues.includes("Omkar")

console.log(exist);

// 3. Object.entries()

// Print all key-value pairs.

console.log(Object.entries(student));


// Print the first entry.

let firstentries = Object.entries(student)

console.log(firstentries[0]);



// Print the last entry.

let lestentries = Object.entries(student)

console.log(lestentries[lestentries.length-1]);

// Count the total number of entries.

console.log(Object.entries(student).length);

// Print all entries using a loop.


let print  = Object.entries(student).map((values)=>{
   return values
  
})

console.log(print);


const data = [
  ["name", "Omkar"],
  ["age", 22],
  ["course", "JavaScript"]
];


// Convert data into an object.

console.log(Object.fromEntries(data));


// Print the name property from the new object.

let  info = Object.fromEntries(data);

console.log(info.name);

// Add ["city", "Kolhapur"] and convert it into an object.
data.push(["city", "Kolhapur"]);
let studentObject = Object.fromEntries(data);
console.log(data);


// Count the total keys in the new object.
let counts = Object.keys(Object.fromEntries(data)).length;
console.log(counts);


// Print all values of the new object.


let  printval = Object.values(Object.fromEntries(data))

console.log(printval);



const product = {
  productId: 101,
  productName: "Gaming Mouse",
  category: "Electronics",
  price: 1500,
  inStock: true
};

// 5. Object.seal()
// Seal the product object.
  let seals = Object.seal(product)
  console.log(seals);
  
// Try adding a new property email.

product.email ="omkarmane@9627.com"

console.log(product);

// Update the price property.

product.price = 2000;

console.log(product);

// Try deleting the category property.

delete product.inStock

console.log(product)

// Check whether the object is sealed.

console.log(Object.isSealed(product));


// Object.freeze()


console.log(Object.freeze(product));

console.log(Object.isFrozen(product));


//! this method freez the object means we cannot insert , update ,delete properties




// Object.hasOwn()

// Check whether the object has the name property.


console.log(Object.hasOwn(student,"name"));


// Check whether the object has the salary property.

console.log(Object.hasOwn(student,"salary"));



// Object.assign()

let mix = Object.assign(student,product)

console.log(mix);



