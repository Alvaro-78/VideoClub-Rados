const searchButton = async () => {

  const inputSearch = document.getElementById("input");
  inputSearch.innerHTML = "";

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


const homeButton = () => {

  switchScreenHome("screenHome","screenSearch");
};