const list = document.querySelector('.List');

const callApi = async () => {

    let stream = await fetch('https://dummyjson.com/products')
    let data = await stream.json();

    console.log(data.products)

    data.products.forEach((value) => {
        let card = document.createElement('div')
        card.className = 'card'

        let image = document.createElement('img')
        image.className = 'image'
        image.src = value.thumbnail 
        

        let h1 =  document.createElement('h1')
        h1.className='titles'
        h1.innerText = value.title;

        let price = document.createElement('h3')
        price.className = 'price'
        price.innerHTML += `Price : <span class = 'span1'>${Math.floor(value.price*2)}/</span> <span>${value.price}</span>`;
        
        let div2 = document.createElement('div')
        div2.className='div2'

        let rating = document.createElement('p')
        rating.className = 'rating'
        rating.innerHTML +=  `<b>Rating :</b> <span class = 'span2'>${value.rating}</span>`   
        
        
        let btn = document.createElement('button')
        btn.className = 'btn'
        btn.innerText = "Buy Now"

     
    
    list.appendChild(card)
    card.append(image,h1 )
    card.appendChild(div2)
    div2.append(price,rating)
    card.append(btn)

    })
    
}
callApi();