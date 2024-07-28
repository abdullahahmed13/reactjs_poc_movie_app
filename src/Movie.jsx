/**
 * @file Movie.jsx
 * @description
 * The component file for the movie cards.
 * 
 * @author Abdullah Ahmed
 * @date 27th of July 2024
 * @version 1.0.0
 * 
 */

import React from "react";

const Movie = ({movieStructure}) => {
    return (
        <div className="movie">
            <div>
                <p>{movieStructure.Year}</p>
            </div>
            <div>
                <img src={movieStructure.Poster !== "N/A" ? movieStructure.Poster : "https://via.placeholder.com/400"} 
                alt={movieStructure.Title} />
            </div>
            <div>
                <span>{movieStructure.Type}</span>
                <h3>{movieStructure.Title}</h3>
            </div>
        </div>
    )
}

export default Movie;