let count = document.querySelector('.count');
let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec')
let res = document.querySelector('.res')

let num = 0;

inc.addEventListener('click',()=>{
    num = num + 1
    count.innerText  = num

})

dec.addEventListener('click',()=>{
     if (num > 0) {
         num = num - 1
     }
     count.innerText  = num

})

res.addEventListener('click',()=>{
    num = num = 0;
    count.innerText  = num

})