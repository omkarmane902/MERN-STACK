let person1 = {
 name : "omkar",
 age:18,
 address: "yadrav",
 }

let fun = function(city , country){
    console.log(this.name + " " + city + " " + country);
}

let person2 = {
 name : "avi bhai",
 age:22,
 address: "bed",
}
 let p1 = fun.bind(person1,"kolhapur","India");
 let p2 = fun.bind(person2,"pune","India");

 p1()
 p2()


