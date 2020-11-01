import React from 'react';
import './SearchMovie.css';

function SearchMovie(props) {
//   //states- input query, movies
//     const [query, setQuery] = useState('');
//  //create the state for movies, and update that state appropriate
//     const [movies, setMovies] =useState([]);
   
//     const searchMovies = async (e)=>{
//         e.preventDefault();
//         const url = `https://api.themoviedb.org/3/search/movie?api_key=7e314c4e6b92721e334c7844b74e7688&language=en-US&query=${query}&page=1&include_adult=false`;
        
//        try{
//         const res = await fetch(url);
//         const data  = await res.json();
//         console.log(data.results);
//         setMovies(data.results);
//        }catch(err){
//            console.log(err);
//        }

//     }

    return (
        <>
        <div className="search-movie">
            <form className="form" onSubmit ={props.searchMovies}>
                <div>
                     <input className="input-box" type="text"
                      placeholder="Search for a movie, ie The Walking Dead"
                      value={props.query} onChange={props.handleChange}
                      />
                      <button type="submit" className="btn">Search</button>
                </div>

            </form>
        </div>
        </>
    )
}

export default SearchMovie;
