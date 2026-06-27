let CallApi = async () =>{

    try{

        
    let data =  await fetch("https://rickandmortyapi.com/api/character")
    let steam = await data.json();

    console.log(steam.results);
    console.log(steam.results[1].image);

      steam.results.forEach((value)=>{
        
        console.log(value.image);
        console.log(value.name);
        
      })
    
    }
    catch(error){
     console.log(error);
     
    }
} 

CallApi()