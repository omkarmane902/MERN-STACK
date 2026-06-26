let data = new Promise((reslove,reject)=>{
 
    fetch('https://jsonplaceholder.typicode.com/posts/').then((responce)=>{
         
       return responce.json();
    })

    .then((users)=>{
        
        users.forEach((val)=>{
            console.log(val.title);
            
        })
       
    })
    
   
});

