document.addEventListener('DOMContentLoaded',() =>{
API.addBeers()
})

function getBeers(beers){
   beers.forEach(beer =>{
       let newBeer = new Beer(beer)
       newBeer.renderBeerCard()
   })
}