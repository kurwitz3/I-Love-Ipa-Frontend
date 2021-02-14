class Beer{
    constructor({beer_name,beer_style,ibu,alcohol_percentage,
        link,image,likes}){
            this.beer_name = beer_name
            this.beer_style = beer_style
            this.ibu = ibu
            this.alcohol_percentage = alcohol_percentage
            this.link = link
            this.image = image
            this.likes = likes  
    }

    renderBeerCard(){
        const beerDiv = document.getElementById('beer-list')
        const beerContainer = document.createElement('div')
        beerContainer.id = `Beer${this.id}`
        beerContainer.className = "card"
        beerContainer.innerHTML += this.beerHTML()
        beerDiv.appendChild(beerContainer)
    }

    beerHTML(){
      return `
        <div class="card">
          <h2 class="beer-name" align='center'>${this.beer_name}</h2>
          <img class="img" src='${this.image}'>
          <p>Style: ${this.beer_style}</p>
          <p>Ibu: ${this.ibu}</p>
          <p>Alcohol Percentage: ${this.alcohol_percentage}%</p>
             <div class="comment-form">
               <form class="c-form" id="add-comment"  data-action="create">
                 <h3>Add A Comment!</h3>
                   <div class="input-field">
                     <label for="name">Beer Name:</label>
                     <input type="text" name="name" id="name">
                   </div><br>
   
                    <div class="input-field">
                      <label for="content">Comment:</label>
                      <textarea name="content" id="content"></textarea>
                    </div><br>
                    <input type="submit" value="Add Comment" class="btn">
               </form>
             </div>
           <a href=${this.link} class="link"> Brewery Website</a><br>
        </div>`
    }
}

