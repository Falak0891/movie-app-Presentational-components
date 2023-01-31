import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component{
    render(){
          
        return(
            <div className="main">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                
            </div>
        )
    }
}

export default MovieList;