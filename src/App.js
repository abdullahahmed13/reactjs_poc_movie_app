/**
 * @file App.js
 * @description
 * The main file for the Movie Land POC react app.
 * 
 * @notes
 * - The used API below is www.omdbapi.com not the best but good for this POC
 * 
 * @author Abdullah Ahmed
 * @date 27th of July 2024
 * @version 1.0.0
 * 
 */

import React from "react";
import { useState, useEffect } from "react";

import Movie from './Movie';
import './App.css';
import searchSvg from './search.svg';


const API_URL = 'https://www.omdbapi.com/?apikey=e240c300';


const App = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const search_movies = (movieName) => {
        fetch(`${API_URL}&s=${movieName}`)
        .then((response) => response.json())
        .then((data) => setMovies(data.Search));
    }

    useEffect(() => {
        search_movies('fantastic');
    }, [])
    return(
        <div className="app"> 
            <h1>Movie Land</h1>

            <div className="search">
                <input
                placeholder="Search a Movie..."
                value={search}
                onChange={(event) => {setSearch(event.target.value)}} 
                />

                <img 
                src={searchSvg}
                alt="SearchSvg"
                onClick={() => search_movies(search)}
                />
            </div>

                {
                    (movies?.length > 0) ?
                    (<div className="container">
                        {
                            movies.map((movie) => (
                                <Movie movieStructure={movie} />
                            ))
                        }
                    </div>)
                    :
                    (<div className="empty">
                        <h2>No movies found</h2>
                    </div>)

                }
        </div>
    );
}

export default App;