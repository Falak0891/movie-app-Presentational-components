import React from "react";

class MovieCard extends React.Component{
    constructor(){
        super();

        this.movies={title: "The Avengers",
        plot: "Plot of the movie is related to super natural powers",
        price: 199,
        rating: 8.0,
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    }
        
        this.state = {
            stars: 0,
            fav:false,
            isInCart:false
            
        }
        //this.addStars = this.addStars.bind(this);
    }

    addStars = () => {

        //this.state.stars += 0.5;
        

        //form 1
        // this.setState({
        //     stars: this.state.stars+0.5
        // })

       // form2
        this.setState((prevState) => {
            if (prevState.stars >=5){
                return;
            }
        return {
            stars: prevState.stars + 0.5
        }
        }, () => console.log("inside seState function", this.state.stars))

        
       console.log("this.state.stars", this.state.stars);
    }

    decStars = () => {

        //form2
        this.setState((prevState) => {
            if (prevState.stars <=0){
                return;
            }
        return {
            stars: prevState.stars - 0.5
        }
    })

        
      //  console.log("this", this.state.stars);
    }

    toggleFav= () => {
        this.setState({
            fav: !this.state.fav
        })
    }

    toggleCart= () => {
        this.setState({
            isInCart: !this.state.isInCart
        })
    }

    render(){
        //console.log("Render Function called")
        const {title : movieName,plot,price,rating,poster} = this.movies;
       const {stars,fav,isInCart} = this.state;
    
        return(
            <div className="main">
                
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src={poster} />
                    </div>
                    
                    <div className="right">
                        <div className="title">{movieName}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                            <img className="str-btn" 
                                alt="Decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                onClick={this.decStars}
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" 
                                        
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                    onClick={this.addStars}
                                />
                                <span className="starCount">{stars}</span>
                            </div>
                            <button className={fav?"unfavourite-btn":"favourite-btn"}  onClick={this.toggleFav}>
                                {fav ? "Un-favourite":"Favourite"}
                            </button>
                            <button className={isInCart?"unfavourite-btn":"cart-btn"}  onClick={this.toggleCart}>
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