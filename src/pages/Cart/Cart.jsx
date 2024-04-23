import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItems, removeFromCart, totalCartAmount } =
    useContext(StoreContext);
  const navitage = useNavigate();
  return (
    <div className="cart">
      <div className="cartitems">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cartitems-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="remove"
                    onClick={() => removeFromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cartbotton">
        <div className="carttotal">
          <h2>Cart Totals</h2>
          <div>
            <div className="carttotal-details">
              <p>Subtotal</p>
              <p>${totalCartAmount()}</p>
            </div>
            <hr />
            <div className="carttotal-details">
              <p>Delivery Fee</p>
              <p>${totalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="carttotal-details">
              <b>Total</b>
              <b>${totalCartAmount() === 0 ? 0 : totalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navitage("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitem-promocode">
          <div>
            <p>If you have a promocode enter it here.</p>
            <div className="promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
