const addBeerForm = document.getElementById('addBeer-form')
let beerDiv = document.getElementById('beer__container')
const commentContainer = document.getElementById('comment-div')
const allCbtn = document.getElementById('comments__viewAll-btn')
const ibuButton = document.getElementById('sort-ibu')
const apButton = document.getElementById('sort-Ap')
const inputValue = document.getElementsByClassName('input-value')
const commentUrl = 'https://vast-gorge-17900.herokuapp.com/comments'
const beerUrl = 'https://vast-gorge-17900.herokuapp.com'

document.addEventListener('DOMContentLoaded',() =>{
  API.addBeers()
  API.addComents()
  addBeerForm.addEventListener('submit',(e) => API.createBeer(e))
  ibuButton.addEventListener('click', () => Beer.sortByIbu())
  apButton.addEventListener('click',() => Beer.sortByAp())
  allCbtn.addEventListener('click', () => Comment.commentButton())
})



  



 
  
  
   
 
    
  


