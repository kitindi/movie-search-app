import React from 'react';
import MoviesList from './components/MoviesList/MoviesList';
import SearchMovie from './components/SearchMovie/SearchMovie';

class Main extends React.Component{
  constructor(){
    super();

    this.state ={query:'', movies:[]};
    this.handleChange = this.handleChange.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
  }

  //states- input query, movies
    // const [query, setQuery] = useState('');
 //create the state for movies, and update that state appropriate
    // const [movies, setMovies] =useState([]);

    handleChange(e){
     this.setState({query: e.target.value})
    }
   
    searchMovies = async (e)=>{
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=7e314c4e6b92721e334c7844b74e7688&language=en-US&query=${this.state.query}&page=1&include_adult=true`;
        
       try{
        const res = await fetch(url);
        const data  = await res.json();
        console.log(data.results);
        this.setState({movies: data.results});
       }catch(err){
           console.log(err);
       }

    }
    render(){
      return (
      <div className="container">
          <div>
              <h1 className="title">The Movies Search App</h1>
          </div>
        <header className="intro">
          <div className="info">
            <p>Discover movies, TV shows and much more you love, Explore now.</p>
          </div>
          <SearchMovie  handleChange={this.handleChange} searchMovies ={this.searchMovies} query={this.state.query}/>
        </header>  
        <MoviesList movies ={this.state.movies}/>  
      </div>
    );
  }
    }
    


export default Main;