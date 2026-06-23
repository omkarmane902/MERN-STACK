let person1 = {
 name : "omkar",
 age:18,
 address: "yadrav",
 }

function greed (city){
console.log(this.name + " " + city);
}
 
greed.call(person1,"kolhapur")

 let person2 = {
 name : "avi bhai",
 age:22,
 address: "bed",
}

greed.call(person2,"pune")




