import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvide";
import "./CheckoutProduct.css";
function CheckoutProducts({ id, title, price, rating, image }) {
  const [, disatch] = useStateValue();

  function removefromCart() {
    disatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  }

  function ordertracking() {
    console.log("oder placed")
    disatch({
      type: "ORDER_PLACED",
      id: id,
    });
  }

  return (
    <div className="checkoutProducts">
      <img
        className="checkoutProducts__image"
        src={`https://${image}`}
        alt=""
      />
      <div className="productDetails__info">
        <p>{title}</p>
        <div className="product__rating">
          {Array(5)
            .fill()
            .map((i) => (
              <p>⭐</p>
            ))}
        </div>
        <p>
          {`M.R.P.:   `}
          <small>₹</small>
          <strong className="fake_product_price">
            {Math.floor(price * 82.74 + 1500)}
          </strong>
        </p>
        <p>
          {`Deal of the Day: `}
          <small>₹</small>
          <strong style={{ color: "red" }}>{Math.floor(price * 82.74)}</strong>
        </p>
        <small>Ends in 4 days</small>
        <br />
        <small>You Save: ₹1500 Inclusive of all taxes</small>
        <br />
        <br />
        <Link to='/buynow'>
          <button onClick={() => ordertracking()}>Buy now</button>
        </Link>
        <button onClick={() => removefromCart()}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
