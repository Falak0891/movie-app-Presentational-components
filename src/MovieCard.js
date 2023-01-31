import React from "react";

class MovieCard extends React.Component{

    render(){
          
        return(
            <div className="main">

                {/**Movie Card */}
                <div className="movie-card">

                    {/**Left section of Movie Card */}
                    <div className="left">
                        <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                    </div>
                    
                    {/**Right section Movie Card */}
                    <div className="right">

                        {/**Title, plot, price of the movie */}
                        <div className="title">The Avengers</div>
                        <div className="plot">Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</div>
                        <div className="price">Rs. 199</div>

                        {/**Footer starts here with ratings, stars and buttons */}
                        <div className="footer">
                            <div className="rating">8.5</div>

                            {/**Star image with increase and decrease buttons and star count */}
                            <div className="star-dis">
                                <img className="str-btn" 
                                    alt="Decrease" 
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                />
                                <span className="starCount">0</span>
                            </div>

                            {/**Favourite and add to cart buttons */}
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to Cart</button>
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;