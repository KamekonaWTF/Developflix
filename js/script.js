import peliculas from './peliculas.js'

const pelisFX = peliculas.filter((pelicula) => pelicula.genre_ids.includes(28));
const divFX = document.getElementById("genero-28");
for (let i = 0; i < pelisFX.length; i++) {
    console.log(pelisFX[i].original_title);
    divFX.innerHTML += `<div class="containerPeli"><figure><img src ="https://image.tmdb.org/t/p/w500${pelisFX[i].poster_path}"><p style>${pelisFX[i].original_title}</p></figure></div>`;
}
const thriller = peliculas.filter((pelicula) => pelicula.genre_ids.includes(53));
const thrlr = document.getElementById("genero-53"); 
for(let i = 0; i < thriller.length; i++){
    console.log(thriller[i].original_title);
    thrlr.innerHTML += `<div class="containerPeli"><figure><img src ="https://image.tmdb.org/t/p/w500${thriller[i].poster_path}"><p>${thriller[i].original_title}</p></figure></div>`;
}
const adventure = peliculas.filter((pelicula) => pelicula.genre_ids.includes(12));
const adv = document.getElementById("genero-12"); 
for(let i = 0; i < adventure.length; i++){
    console.log(adventure[i].title);
    adv.innerHTML += `<div class="containerPeli"><figure><img src ="https://image.tmdb.org/t/p/w500${adventure[i].poster_path}"><p>${adventure[i].original_title}</p></figure></div>`;
}
