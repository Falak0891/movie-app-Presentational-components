import React from "react";
import MovieCard from "./src/MovieCard";
import { data } from "./src/data";

class MovieList extends React.Component{
    constructor(){
        super();

        this.movies= data;
        
        this.state = {
            stars: data.map((movie) => movie.Stars),
            fav: [],
            isInCart:false
            
        }
        //this.addStars = this.addStars.bind(this);
    }
    addStars = (movie) => {
        const {stars} = this.state;
        const id = this.movies.indexOf(movie);

        if(stars[id]>=5){
            return;
        }

        stars[id] += 0.5;

        this.setState({
            stars
        });

       // form2
        // this.setState((prevState) => {
        //     if (prevState.stars >=5){
        //         return;
        //     }
        // return {
        //     stars: prevState.stars + 0.5
        // }
        // })
    }


    decStars = (movie) => {

        const {stars} = this.state;
        const id = this.movies.indexOf(movie);

        if(stars[id]<=0){
            return;
        }

        stars[id] -= 0.5;

        this.setState({
            stars
        });

        //form2
    //     this.setState((prevState) => {
    //         if (prevState.stars <=0){
    //             return;
    //         }
    //     return {
    //         stars: prevState.stars - 0.5
    //     }
    // })
    }

    toggleFav= (movie) => {
        const {fav} = this.state;
        const id = this.movies.indexOf(movie)

        fav[id]= !this.state.fav[id]

        this.setState({
            fav
        })
    }

    isMovieinFav = (movie) => {
        return this.state.fav.find((item) => item.id === movie.id);

    }

    addfav = (movie) => {
        this.setState((prev) => ({ fav: [...prev.fav, movie] }));

    }

    removeFav = (movie) => {
        const updatedFavItems = this.state.fav.filter(
          (item) => item.id !== movie.id
        );
        this.setState({ fav: updatedFavItems });
      };

    toggleCart= () => {
        this.setState({
            isInCart: !this.state.isInCart
        })
    }
    
    render(){
        console.log(this.state.fav)
        return(
            <>
            {this.movies.map((movie,index) => (
                <MovieCard movies = {movie}
                buttons={this.state}
                stars = {this.state.stars[index]}                
                handleIncrease = {this.addStars}
                handleDecrease = {this.decStars}
                isInFav = {this.isMovieinFav(movie)}
                handleAddFav = {this.addfav}
                handleRemoveFav = {this.removeFav} 
                handleCartToggle = {this.toggleCart}
                key = {movie.id}/>

            ))}
            
           
            
            </>
        )
    }
}

export default MovieList;