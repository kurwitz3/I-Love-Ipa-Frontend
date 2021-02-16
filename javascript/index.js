const addBeerForm = document.getElementById('add-form')
const commentUrl = 'http://localhost:3000/comments'
const beerUrl = 'http://localhost:3000/beers'
const commentForm = document.getElementById('add-comment')

document.addEventListener('DOMContentLoaded',() =>{
  API.addBeers()
  addBeerForm.addEventListener('submit',createBeer)
})

function getBeers(beers){
   beers.forEach(beer =>{
       let newBeer = new Beer(beer)
       newBeer.renderBeerCard()
   })
}

function createBeer(e){
  e.preventDefault()
  const formBeerName = document.getElementById('beer_name').value
  const formBeerStyle = document.getElementById('style').value
  const formIbu = document.getElementById('ibu').value
  const formAp = document.getElementById('alcohol_percentage').value
  const formLink =  document.getElementById('link').value
  const formImage = document.getElementById('image').value
    
    const formData = {
        beer_name: formBeerName,
        beer_style: formBeerStyle,
        ibu: formIbu,
        alcohol_percentage: formAp,
        link: formLink,
        image: formImage,
        likes: 0
    }
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    }
    fetch(beerUrl,configObj)
    .then(resp => resp.json())
    .then(json =>{
        let newBeer = new Beer(json)
        newBeer.renderBeerCard()
    })
    .catch((error) => { console.log(error.message) })
    addBeerForm.reset()
  }
 
  function createComment(e){
    e.preventDefault()
    let content = document.getElementById('content').value
    let beer_id = parseInt(document.getElementById('content').parentElement.id)
    let beer = Beer.allBeers
      for(let i = 0;i < beer.length;i++){
         if(beer[i].id === beer_id){
          return beer[i].beer_name
         }
      }
    const commentData = {
      name: beerName,
      content: content,
      beers_id: beer_id
    }
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(commentData)
    }
    fetch('http://localhost:3000/comments',configObj)
    .then(resp => resp.json())
    .then(json => new Comment(json))
  }
  
  
   
 
    
  


