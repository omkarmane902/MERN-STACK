let btn = document.querySelector('.btn')
let isMoon = false; 

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


btn.addEventListener('click' , ()=>{
    let randomcolour = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomcolour];
    btn.innerText = isMoon ? "🌞" : "🌑";
    isMoon = !isMoon;
})