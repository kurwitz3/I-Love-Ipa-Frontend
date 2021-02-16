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
            Beer.allBeers.push(this) 
    }

    renderBeerCard(){
      const beerDiv = document.getElementById('beer-list')
      const beerContainer = document.createElement('div')
      const p = document.createElement('p')
      p.innerText = `${this.likes} Likes`
      p.className = 'like-p'
      const button = document.createElement('button')
      button.classList.add('like-btn')
      button.id = 'like-btn'
      button.innerText = 'Like'
      beerContainer.id = `${this.id}`
      beerContainer.className = "card"
      beerContainer.innerHTML += this.beerHTML()
      beerDiv.appendChild(beerContainer)
      beerContainer.appendChild(p)
      beerContainer.appendChild(button)
      button.addEventListener('click',(e) => this.updateLikes(e))
    }

    beerHTML(){
      return `
       <h2 class="beer-name" align='center'>${this.beer_name}</h2>
       <img class="img" src='${this.image}'>
       <p>Style: ${this.beer_style}</p>
       <p>Ibu: ${this.ibu}</p>
       <p>Alcohol Percentage: ${this.alcohol_percentage}%</p>
       <a href=${this.link} class="link"> Brewery Website</a><br>`
    }

    updateLikes(e){
      this.likes++
      e.target.parentElement.querySelector('.like-p').innerText = `${this.likes} Likes`
       fetch(`http://localhost:3000/beers/${this.id}`,{
            method: 'PATCH',
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({"likes": this.likes})
        })
    }

 
}
