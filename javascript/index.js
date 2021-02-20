const addBeerForm = document.getElementById('add-form')
let beerDiv = document.getElementById('beer-list')
const commentContainer = document.getElementById('cmt')
const allCbtn = document.getElementById('all-comments')
const ibuButton = document.getElementById('sort-ibu')
const apButton = document.getElementById('sort-Ap')
const inputValue = document.getElementsByClassName('input-value')
const commentUrl = 'http://localhost:3000/comments'
const beerUrl = 'http://localhost:3000/beers'



document.addEventListener('DOMContentLoaded',() =>{
  API.addBeers()
  API.addComents()
  addBeerForm.addEventListener('submit',(e) => API.createBeer(e))
  ibuButton.addEventListener('click', () => Beer.sortByIbu())
  apButton.addEventListener('click',() => Beer.sortByAp())
  allCbtn.addEventListener('click', () => Comment.commentButton())
})



  



 
  
  
   
 
    
  


