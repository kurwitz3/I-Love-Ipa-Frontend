const addBeerForm = document.getElementById('add-form')
let beerDiv = document.getElementById('beer-list')
const commentContainer = document.getElementById('cmt')
const allCbtn = document.getElementById('all-comments')
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



  



 
  
  
   
 
    
  


