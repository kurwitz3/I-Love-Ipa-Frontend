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
           json.forEach(comment =>{
            let newComent = new Comment(comment)
           })
       })
    }
 

 createComment(e){
  e.preventDefault()
  let content = e.target.firstElementChild.value
  let beer_id = parseInt(e.target.parentElement.id)
  let beerName = Beer.allBeers.find(x => {
     if(x.id === beer_id){
       return x.beer_name
     }
  })
  
  const formData = {
    name: beerName.beer_name,
    content: content,
    beers_id: beer_id
  }
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }
  fetch('http://localhost:3000/comments',configObj)
  .then(resp => resp.json())
  .then(json => { 
    let newComment = new Comment(json)
    newComment.renderComments()})
  }
}
 
