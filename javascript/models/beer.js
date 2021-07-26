class Beer {
  static allBeers = []
    constructor({id,beer_name,beer_style,ibu,alcohol_percentage,
    link,image,likes}){
      this.id = id
      this.beer_name = beer_name
      this.beer_style = beer_style
      this.ibu = ibu
      this.alcohol_percentage = alcohol_percentage
      this.link = link
      this.image = image
      this.likes = likes
      this.renderBeerCard() 
      Beer.allBeers.push(this)
    }
     
  renderBeerCard(){
    const beerContainer = document.createElement('div')
    const form = document.createElement('form')
    const input = document.createElement('textarea')
      input.id = 'comment-textarea'
      form.appendChild(input)
    const commentBtn = document.createElement('button')
      commentBtn.setAttribute('class','all-buttons')
      commentBtn.id = 'view-comment-btn'
      commentBtn.innerText = 'View Comments'
    const formBtn = document.createElement('button')
      formBtn.value = 'submit'
      formBtn.id = 'add-comment-btn'
      formBtn.innerText = 'Add Comment'
      formBtn.setAttribute('class','all-buttons')
      form.appendChild(formBtn)
    const button = document.createElement('button')
      button.setAttribute('class','all-buttons')
      button.id = 'add-likes-btn'
      button.innerText = 'Add Likes'
  
    beerContainer.id = `${this.id}`
    beerContainer.setAttribute('class','beer__card')
    beerContainer.innerHTML += this.beerHTML()
    beerDiv.appendChild(beerContainer)
    beerContainer.append(form,commentBtn,button)
    form.addEventListener('submit',(e) => API.createComment(e))
    button.addEventListener('click',(e) => this.updateLikes(e))
    commentBtn.addEventListener('click',() => this.filterComments())
  }  
  
  beerHTML(){
    return `
     <h2 class= beer__name>${this.beer_name}</h2>
     <img class= beer__image src='${this.image}'>
     <a href=${this.link} class="beer__link"> Brewery Website</a><br>
     <p class= beer__info>Alcohol Percentage: ${this.alcohol_percentage}%</p>
     <p class= beer__info>Style: ${this.beer_style}</p>
     <p class= beer__info>Ibu: ${this.ibu}</p>
     <p class= beer__info id= likes-p>Likes: ${this.likes}</p>`
  }

  updateLikes(e){
    this.likes++
    e.target.parentElement.querySelector('#likes-p').innerHTML = `Likes: ${this.likes}`
      fetch(`https://vast-gorge-17900.herokuapp.com/beers/${this.id}`,{
        method: 'PATCH',
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({"likes": this.likes})
      })
  }
    
  static sortByIbu = () => {
    const sortedBeer = Beer.allBeers.sort(function(a,b){
       return b.ibu - a.ibu
    })
     beerDiv.innerHTML = ""
     sortedBeer.forEach(x =>{
       return x.renderBeerCard()
    })
  }
    
  static sortByAp = () => {
    const sort = Beer.allBeers.sort(function(a,b){
      return b.alcohol_percentage - a.alcohol_percentage
    })
    beerDiv.innerHTML = ""
    sort.forEach(x =>{
     return x.renderBeerCard()
    })
  }
    
  filterComments(){
    commentContainer.innerHTML = ''
    let filtered = Comment.allComments.filter(comment => {
       if(comment.beer_id === this.id){
           return comment
        }
    })
      filtered.forEach(x => {
        return x.renderComments()
    })
  }
}



 
