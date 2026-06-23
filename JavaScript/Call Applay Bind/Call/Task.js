//! call()
// Used to invoke a function immediately.

// Allows you to set the value of this.

// Arguments are passed one by one.



let person1 = {
 name : "omkar",
 age:18,
 address: "yadrav",
 printDetails: function (){
      console.log(this);
 }
}

person1.printDetails()


let person2 = {
 name : "avi bhai",
 age:22,
 address: "bed",
}

person1.printDetails.call(person2)

