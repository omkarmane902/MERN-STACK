let data = {
  "id": 1,
  "name": "Omkar",
  "age": 22,
  "course": "JavaScript",
  "skills": ["HTML", "CSS", "JavaScript"],
  "address": {
    "city": "Kolhapur",
    "state": "Maharashtra"
  }
};


// Convert a JSON string into a JavaScript object

//! let  Convert = JSON.parse(data)

//! console.log(Convert);

import objectData from './Task.json' with { type: 'json' };

console.log(objectData);



// Print the name.


console.log(objectData.name);

// Print the age.

console.log(objectData.age)

// Convert the JSON object into a string.

console.log(JSON.stringify(data));


// Check the type before conversion.

console.log(typeof data);


// Print all keys of the JSON object.

let con = JSON.stringify(data);

console.log(Object.keys(data));


