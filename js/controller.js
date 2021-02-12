let promise = axios.get("http://api.themoviedb.org/3/movie/upcoming?api_key=bb78e4cf3442e302d928f2c5edcdbee1");

// resultPromise = promise.then((r) => {r.results});

let pelisArrayPromise = promise.then((response) => {response.data.results});

// Esta función recibirá el array de las películas y pintará un div or cada línea
const pintaLasPelis = (pelisCollection) => {

  const divPelisDomElement = document.getElementById('pelis');

  pelisCollection.map((pelicula) => {

     const newPeliDomElement =  document.createElement('div');
     newPeliDomElement.innerHTML = pelicula.title;
     divPelisDomElement.appendChild(newPeliDomElement);
     
  });
}

// Al resolver esta promesa , recibe un array de pelis y la función pintaLasPelis() las pimtará
pelisArrayPromise.then(pintaLasPelis);
