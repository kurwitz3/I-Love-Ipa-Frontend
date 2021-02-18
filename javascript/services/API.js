class API{
    static addBeers(){
      return fetch(beerUrl) 
       .then(resp => resp.json())
       .then(json => {
          json.forEach(beer =>{
              let newBeer = new Beer(beer)
          })
       })
    }
  
    static addComents(){
      return fetch(commentUrl) 
       .then(resp => resp.json())
       .then(json => {
         json.forEach(x => {
           let newComment = new Comment(x)
          })
        })
    }
  }
 
