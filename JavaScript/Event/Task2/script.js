let btn = document.querySelector('.btn');

let colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "cyan",
    "brown",
    "gray"
];

btn.addEventListener('click',()=>{
 let randomIndex = Math.floor(Math.random() * colors.length);
document.body.style.backgroundColor = colors[randomIndex]

})