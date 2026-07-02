let clock  = document.querySelector('.clock ')



let time =()=>{

    let date = new Date()
    
    let hour = date.getHours()
    let minute = date.getMinutes();
    let second = date.getSeconds();
   

    clock.innerHTML = hour + ":" + minute + ":" + second
}
setInterval(time,1000)







