class API{
    static addBeers(){
      return fetch("http://localhost:3000/beers") 
       .then(resp => resp.json())
       .then(json => getBeers(json))
        
    }
}