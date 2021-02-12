
const showAllCountries = () => {
  
  setTimeout(() => {

    let allCountries = axios.get( url );
    
    const divCountriesDom = document.getElementById("countries");
    
    allCountries.then( (data) => { divCountriesDom.innerHTML = `El primer país es ${data.data[0].name}`;

    });
    
    allCountries.then( console.log );
    
  }, 1000);
  
};


showFirstCountry = () => {

  setTimeout (() => {

    let oneCountry = axios.get( url1 );

    const divCountriesDom = document.getElementById("countries1");
    
    oneCountry.then( (data) => { divCountriesDom.innerHTML = `El segundo país es ${data.data[0].name};`;

    });
    
  }, 2000);
  
};


showSecondCountry = () => {

  setTimeout (() => {

    let secondCountry = axios.get( url2 );

    const divCountriesDom = document.getElementById("countries2");
    
    secondCountry.then( (data) => { divCountriesDom.innerHTML = `El tercer país es ${data.data[0].name};`;

    });

    secondCountry.then( console.log );

  }, 3000);

};
  
  
const url = "https://restcountries.eu/rest/v2/all";
const url1 = "https://restcountries.eu/rest/v2/name/Spain";
const url2 = "https://restcountries.eu/rest/v2/name/Cuba";

showAllCountries (url );
showFirstCountry( url1 );
showSecondCountry( url2 );