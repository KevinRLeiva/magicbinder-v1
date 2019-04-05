let magicCard = document.getElementsByClassName('card');

Array.from(magicCard).forEach(function(element){
  fetch(`https://api.scryfall.com/cards/random`)
  .then(res=>res.json())
  .then(response =>{
    element.src = response.image_uris.large
  })
})
