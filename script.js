const favs = {
  artist: "Céline Dion",
  food: "pho",
  animal: "wombat",
  number: 37
};


//start coding here
let newArtist = "Fujii Kaze";
favs.artist = newArtist;
let newFood = "Rice";
favs.food = newFood;
let newAnimal = "Cat";
favs.animal = newAnimal;
let newNumber = 3
favs.number = newNumber;
let movie = "Bullet Train";
favs.movie = movie
let anime = "ID:Invaded";
favs.anime = anime













// DON'T CHANGE CODE BELOW THIS LINE
for (let key in favs) {
  document.querySelector(".favs").insertAdjacentHTML('beforeend', `<p>${key}: ${favs[key]}</p>`);
}