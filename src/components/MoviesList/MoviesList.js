import React from 'react';
import './MoviesList.css';
import MovieCard from '../MovieCard/MovieCard';

const MoviesList =({movies})=>{
    return (
        <div className="movie-list">
         { movies.map(movie =><MovieCard  src={movie.poster_path} title={movie.title}  year={movie.release_date}/>)}
        </div>
    )
}

export default MoviesList;