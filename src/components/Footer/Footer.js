import React from "react";
import Image from "../../assets/amazon_inverse.svg";
import jcbImage from "../../assets/jcb_inverse.svg";
import mastercardImage from "../../assets/mastercard_inverse.svg";
import paypalImage from "../../assets/paypal_inverse.svg";
import visaImage from "../../assets/visa_inverse.svg";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="content">
          <div className="contact-info">Contact Info</div>
          <p>
            <b>Phone</b>: (+91) 9876543210
          </p>
          <p>
            <b>Address:</b> 1418 Riverwood Drive,
          </p>
          <p>Suite 3245 Cottonwood,</p>
          <p>CA 96052, United State</p>
          <p>We accept:</p>
          <img src={Image} alt="gamepadImage logo" />
          <img src={jcbImage} alt="jcbImage logo" />
          <img src={mastercardImage} alt="mastercardImage logo" />
          <img src={paypalImage} alt="paypalImage logo" />
          <img src={visaImage} alt="visaImage logo" />
        </div>
        <div className="content">
          <div className="contact-info">Categories</div>
          <p>Men's clothing (4)</p>
          <p>Jewellery (4)</p>
          <p>Electronics (6)</p>
          <p>Women's clothing (6)</p>
        </div>
        <div className="container content">
          <div className="contact-info">Let's stay in touch</div>
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="Your Email address"
            required
          />
          <span>Subscribe</span>
          <p>Keep up to date with our latest</p>
          <p>news and special offers.</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="signature">
        <div>&copy;2020, KD Stores Website</div>
        <div>All Rights Reserved.</div>
      </div>
    </div>
  );
}
