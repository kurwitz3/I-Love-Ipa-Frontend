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
}

