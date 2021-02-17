let promise = axios.get( 'http://api.themoviedb.org/3/movie/popular?api_key=c0b6dea31a9d647a6b7d1eafa59bacaa' );

// Promesa de un array de pelis

let pelisArrayPromise = promise.then( ( response ) => response.data.results );
resultsPromise = promise.then( response => response.results );
//Esta funcion recibe un array de peliculas y pinta en un div una linea por cada pelicula

const showMovies =  ( moviesCollection ) => { 
  
  const divMovieDomElement = document.getElementById( 'movies' );
  console.log (moviesCollection);

  moviesCollection.map( ( movieTitle ) =>{

    const pathImg = 'https://image.tmdb.org/t/p/w500';
    const newMovieDomElement = document.createElement('div');
    const moviePic = document.createElement( 'img' );
    const titleMovie = document.createElement( 'h4' );
    
    divMovieDomElement.appendChild( newMovieDomElement );
    newMovieDomElement.appendChild( titleMovie );
    newMovieDomElement.appendChild( moviePic );
    
    newMovieDomElement.setAttribute('class', 'titlePicture');
    titleMovie.innerHTML = movieTitle.title;
    moviePic.setAttribute( 'src', pathImg + movieTitle.poster_path );

  });
};

pelisArrayPromise.then( showMovies );
