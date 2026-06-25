// Task 1: Print all arguments

let show = (...all)=>{
    console.log(all);
    
}

show(10, 20, 30, 40);


// Task 2: Count total arguments


let count = (...all)=>{
    console.log(all.length);
    
}

count(10, 20, 30, 40, 50);


// Task 3: Print first argument and remaining arguments

let display = (num1,...all)=>{
    console.log(num1);
    console.log(all);
    
    
}
display(10, 20, 30, 40, 50);



// Task 4: Find sum of all numbers

let allsum = (...num)=>{

    let total = num.reduce((acc,val)=>{
      return acc += val
    },0)
    return total
}

console.log(allsum(10, 20, 30, 40));


// Task 5: Find average of all numbers

let average =(...value)=>{
   let total = value.reduce((acc,val, index)=>{
      
   return  acc + val 

   },0)

  return total / value.length

}

console.log(average(10, 20, 30, 40));



// Task 6: Find largest number


let  largest = (...num) =>{

    console.log(Math.max(...num));
    
}
largest(10, 50, 20, 90, 30);



const numbers = [10, 20, 30, 40, 50];

let [ first , ...all] = numbers

console.log(first);
console.log(all);



// Task 13: Object Destructuring

const student = {
  id: 1,
  name: "Omkar",
  age: 22,
  city: "Kolhapur",
  course: "JavaScript"
};

delete student.city