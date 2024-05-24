import {useEffect} from 'react';

import './App.css';
import SearchIcon from './search.svg';

const API_URL ='http://www.omdbapi.com?apikey=d37fdd62';

/* const movie1={
  "Poster":"https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
  "Title"
  : 
  "Captain Marvel",
  "Type"
  : 
  "movie",
  "Year"
  : 
  "2019",
  "imdbID"
  : 
  "tt4154664"} */

const App = () => {

  //searchMovies is an arrow fn 
                  //async is for data => it takes time to fetch data
  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();

    console.log(data.Search);
  }

  useEffect(()=>{
    searchMovies('movie');       
  },[]);


  return (
    <div className='app'>
      <h1> I❤️Movies</h1>
      <div className='search'>
        <input
          placeholder='Search for movies' 
          value="Superman" 
          onChange={()=>{}}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={()=>{}}
        />
      </div>

      <div className='container'>
        
      </div>
    </div>
  );
}

//exporting so that we can call it from somewhere else
export default App;
