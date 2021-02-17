
let searchDiv = document.getElementById("input");

let searchID = document.getElementById("inputID");

let key = "c0b6dea31a9d647a6b7d1eafa59bacaa";

let source = "search";

let criterio = "movie";

let base_url = "http://api.themoviedb.org/3/";


const call = async ( url ) => {

  let res = await axios.get( url );

  if( res.data.results ) {
    return res.data.results;
  };

  if( res.data.title ){
    return res.data;
  };

};

const draw = async ( drawCollection ) => {

  console.log( drawCollection )

    //Proceso para el pintado HTML de las películas
  const divPelisDomElement = document.getElementById("screenSearch");
  divPelisDomElement.innerHTML = "";
  
  if (Array.isArray(drawCollection)) {
    drawCollection.forEach(pelicula => {
      divPelisDomElement.innerHTML += `<div id='peliculas'>
      <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}'></img><h2>${pelicula.title}</h2><p>${pelicula.overview}</p></div>`        
    });
  };
  
  if (drawCollection.original_title){
    divPelisDomElement.innerHTML += `<div class='Peliculas'>
        <img src='https://image.tmdb.org/t/p/w500${drawCollection.poster_path}' width='200px' class='Picture'>
        </img></div><div class='infoPelis'><h2>${drawCollection.original_title}</h2><p>${drawCollection.overview}</p></div>`
      console.log(drawCollection.poster_path);
  };
};

const searchButton = async () => {

  let query = searchDiv.value;



  let url = `${base_url}${source}/${criterio}?api_key=${key}&query=${query}`;

  let movies = await call( url );

  draw( movies );
    
  switchScreenSearchResult("screenHome","screenSearch");
};

const searchById = async () => {

  let query = searchID.value;
    
  let url = `${base_url}${criterio}/${query}?api_key=${key}&language=es-ES`; 

  let movies = await call( url );


  draw( movies );

  switchScreenSearchResult("screenHome","screenSearch");

};