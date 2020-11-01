import React from 'react';
import './MovieCard.css'

const MovieCard =({title,src,year})=>{
    return(
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${src}`} alt=""/>
        <div>
            <h3>TITLE: {title}</h3>
             <p>RELEASE DATE:{year}</p>
        </div>
    
        </div>
    )
}

export default MovieCard;