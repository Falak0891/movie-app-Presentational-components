import "../styles.css";
import { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCartItems: false
    };
  }

  handleShow = () => {
    this.setState((prev) => ({
      showCartItems: !prev.showCartItems
    }));
  };

  render() {
    return (
      <div className="cart">
        <div className="top">
          <h3>Cart Items Count: {this.props.cartItems.length}</h3>
          <button onClick={this.handleShow}>Show Items</button>
        </div>
        {this.state.showCartItems && (
          <div className="cart-list">
            {this.props.cartItems.map((movie, i) => (
              <div className="item" key={i}>
                <div className="left">
                  <img src={movie.Images[0]} alt={movie.title} />
                </div>
                <div className="right">
                  <span>{movie.Title}</span>
                  <span>{movie.Plot.substring(0, 75)}...</span>
                </div>
              </div>
            ))}
            <button onClick={this.props.onReset}>Reset Cart</button>
          </div>
        )}
      </div>
    );
  }
}
