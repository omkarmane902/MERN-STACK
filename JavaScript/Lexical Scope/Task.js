 a = 10;

 let outer = ()=>{
  
    let b = 20;
    console.log(a,b,c);    // we cant access the child element 
    let inner =()=>{

        let c = 30 ;

        console.log( a,b,c);  //  इथे Lexical Scope मुळे a आणि b चा ॲक्सेस मिळतो
        
    }
    inner()
 }

 outer()


// we can access the parent element





 