let    FetchApi  = async ()=>{
 try{
    let data = await fetch('https://dummyjson.com/products');

    let objdata = await data.json();
      console.log(objdata.products[0].title);


   }
   catch(error){
    console.log(error);
    
   }
    
} 
FetchApi()