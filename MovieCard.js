import React from "react";

class MovieCard extends React.Component{

    handleFavButton = (movie) => {
        const { isInFav, handleAddFav, handleRemoveFav } = this.props;
        console.log(this.props.isInFav)
    
        if (!isInFav) return handleAddFav(movie);
        return handleRemoveFav(movie);
      };
    
    render(){
        const {isInCart} = this.props.buttons;
        const {Poster,Title,Plot,Price,imdbRating,id}= this.props.movies;
        const {handleCartToggle,handleDecrease, handleFavToggle, handleIncrease,stars,fav,movies,isInFav} = this.props;
       
    
        return(

            <div className="main">
                
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src={Poster} />
                    </div>
                    
                    <div className="right">
                        <div className="title">{Title}</div>
                        <div className="plot">{Plot}</div>
                        <div className="price">Rs. {Price}</div>
                        <div className="footer">
                            <div className="rating">{imdbRating}</div>
                            <div className="star-dis">
                            <img className="str-btn" 
                                alt="Decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                onClick={()=>handleDecrease(movies)}
                                
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" 
                                        
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                    onClick={()=>handleIncrease(movies)}
                                />
                                <span className="starCount">{stars}</span>
                            </div>
                            <button className={isInFav?"unfavourite-btn":"favourite-btn"}  onClick={() => this.handleFavButton(movies)}>
                                {isInFav ? "Un-favourite":"Favourite"}
                            </button>
                            <button className={isInCart?"unfavourite-btn":"cart-btn"}  onClick={handleCartToggle}>
                                {isInCart ? "Remove from Cart":"Add to Cart"}
                            </button>
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;