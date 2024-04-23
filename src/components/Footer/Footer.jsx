import React from "react";
import { assets } from "../../assets/assets";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non
            sit delectus labore quaerat rerum quos unde fugiat praesentium
            dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Earum animi tenetur natus doloremque a, amet sed dignissimos
            corporis cumque fuga!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-111-222-333</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        Copyright 2024 @ Tomato.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
