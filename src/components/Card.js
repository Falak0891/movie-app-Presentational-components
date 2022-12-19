import "../styles.css";
import { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="top">
          <span>{this.props.movie.Title}</span>
          <span>{this.props.movie.Released}</span>
        </div>
        <div className="center">
          <img src={this.props.movie.Images[0]} alt={this.props.movie.Title} />
        </div>
        <div className="bottom">
          <div className="meta">
            <span>{this.props.movie.imdbRating}</span>
            <div>
              <button onClick={() => this.props.onCart(this.props.movie)}>
                Add to Cart
              </button>
              <span>₹{this.props.movie.Cost}</span>
              <span>{this.props.movie.Runtime}</span>
            </div>
          </div>
          <div className="info">
            <span>{this.props.movie.Genre}</span>
            <span>{this.props.movie.Plot}</span>
          </div>
        </div>
      </div>
    );
  }
}
