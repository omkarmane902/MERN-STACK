

let maincard = document.querySelector('.maincard')



let callapi = async()=>{

    let streem = await fetch('https://randomuser.me/api/?results=10');

    let data = await streem.json();

    console.log(data.results);


      data.results.forEach((value)=>{
    
        let card = document.createElement('div')
        card.className = 'card'

        let image = document.createElement('img')
        image.src = value.picture.thumbnail;
        image.className = 'image'
        

        let heading = document.createElement('h3')
        heading.className = 'heading'
        heading.innerText = value.id.name;

        let email = document.createElement('h4');
        email.className = 'email'
        email.innerText = value.email;


       maincard.appendChild(card)
       card.append(image,heading,email)
        
      })

      
    
}

callapi()