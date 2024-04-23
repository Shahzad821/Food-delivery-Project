import React, { useContext } from "react";
import "./placeorder.css";
import { StoreContext } from "../../context/context";
const Placeorder = () => {
  const { totalCartAmount } = useContext(StoreContext);
  return (
    <>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Second Name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div className="multi-fields">
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Number" />
        </div>
        <div className="place-order-right">
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
            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Placeorder;
