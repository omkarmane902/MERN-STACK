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



console.log(Object.keys(student));


console.log(Object.values(student));



const employee = [
  {
    id: 1,
    name: "Omkar",
    marks: 90
  },
  {
    id: 2,
    name: "Rahul",
    marks: 85
  },
  {
    id: 3,
    name: "Neha",
    marks: 95
  }
];




console.log(Object.entries(employee));
