class Beer{
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
    const commentForm = document.createElement('form')
    const viewCommentBtn = document.createElement('button')
    const likesP = document.createElement('p')
    const likesButton = document.createElement('button')
    const beerContainer = document.createElement('div')
    this.createBeerContainer()
    this.createCommentForm()
    this.createViewCommentsBtn()
    this.createLikes()
    beerDiv.appendChild(beerContainer)
    beerContainer.append(commentForm,viewCommentBtn,likesP,likesButton)
  }  

  createBeerContainer(){
    beerContainer.id = `${this.id}`
    beerContainer.setAttribute('class','card')
    beerContainer.innerHTML += this.beerHTML()
  }

  createCommentForm(){
    const input = document.createElement('input')
      commentForm.className = "comment-form"
      input.type = 'text'
      input.className = 'input-value'
    const formBtn = document.createElement('button')
      formBtn.value = 'submit'
      formBtn.innerText = 'Add Comment'
      commentForm.append(formBtn,input)
      commentForm.addEventListener('submit',(e) => API.createComment(e))
  }

  createViewCommentsBtn(){
    commentBtn.id = 'comment-btn'
    commentBtn.innerText = 'View Comments'
    commentBtn.addEventListener('click',() => this.filterComments()) 
  }
  
  createLikes(){
    likesP.innerText = `${this.likes} Likes`
    likesP.className = 'like-p'
    likesButton.classList.add('like-btn')
    likesButton.id = 'like-btn'
    likesButton.innerText = 'Like'
    likesButton.addEventListener('click',(e) => this.updateLikes(e))
  }

  beerHTML(){
    return `
     <h2 class="beer-name" align='center'>${this.beer_name}</h2>
     <img class="img" src='${this.image}'>
     <p>Style: ${this.beer_style}</p>
     <p>Ibu: ${this.ibu}</p>
     <p id=AP >Alcohol Percentage: ${this.alcohol_percentage}%</p>
     <a href=${this.link} class="link"> Brewery Website</a><br>`
  }
  updateLikes(e){
    this.likes++
    e.target.parentElement.querySelector('.like-p').innerText = `${this.likes} Likes`
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



 
