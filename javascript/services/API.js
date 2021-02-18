class API{
    static addBeers(){
      return fetch("http://localhost:3000/beers") 
       .then(resp => resp.json())
       .then(json => {
          json.forEach(beer =>{
              let newBeer = new Beer(beer)
          })
       })
       
        
    }
  
    static addComents(){
      return fetch("http://localhost:3000/comments") 
       .then(resp => resp.json())
       .then(json => {
         json.forEach(x => {
           console.log(x)
           let newComment = new Comment(x)
           newComment.renderComments()
         })
       })
        
    }
 

  }
 
