class API{
  static addBeers(){
    return fetch(beerUrl) 
     .then(resp => resp.json())
     .then(json => {
        json.forEach(beer =>{
            let newBeer = new Beer(beer)
        })
     })
  }

  static addComents(){
    return fetch(commentUrl) 
     .then(resp => resp.json())
     .then(json => {
       json.forEach(x => {
         let newComment = new Comment(x)
        })
      })
  }
  
  static createBeer(e){
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
     fetch(`https://vast-gorge-17900.herokuapp.com/beers`,configObj)
      .then(resp => {
        if(!resp.ok){ 
          window.alert("All fields must be complete")
        }
        else{
          return  resp.json()
        }
      })
      .then(json =>{new Beer(json)})
      
      .catch((error) => { console.log(error.message) })
      
      addBeerForm.reset()
   }

   static createComment(e){
     e.preventDefault()
     let content = e.target.firstElementChild.value
     let beer_id = parseInt(e.target.parentElement.id)
     let beerName = Beer.allBeers.find(x => {
        if(x.id === beer_id){
          return x.beer_name
        }
     })
    
     const formData = {
       name: beerName.beer_name,
       content: content,
       beer_id: beer_id
     }
     const configObj = {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
       },
       body: JSON.stringify(formData)
     }
     fetch(commentUrl,configObj)
       .then(resp => {
         if(!resp.ok){ 
           return window.alert("All fields must be complete")
         }
         else { 
           return resp.json()
         }
       })
       .then(json => { new Comment(json)})
       
       .catch((error) => { console.log(error.message)})
       
       e.target.firstElementChild.value = ''
    }
}
 
