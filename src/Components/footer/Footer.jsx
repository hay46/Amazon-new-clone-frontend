import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#top" className="footer-back-to-top">
          Back to top
        </a>

        <div className="footer-main">
          <div className="footer-column">
            <h3>Get to Know Us</h3>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About Amazon</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Amazon Devices</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Make Money with Us</h3>
            <ul>
              <li>
                <a href="#">Sell products on Amazon</a>
              </li>
              <li>
                <a href="#">Sell on Amazon Business</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
              <li>
                <a href="#">Advertise Your Products</a>
              </li>
              <li>
                <a href="#">Host an Amazon Hub</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Amazon Payment Products</h3>
            <ul>
              <li>
                <a href="#">Amazon Business Card</a>
              </li>
              <li>
                <a href="#">Shop with Points</a>
              </li>
              <li>
                <a href="#">Reload Your Balance</a>
              </li>
              <li>
                <a href="#">Amazon Currency Converter</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Let Us Help You</h3>
            <ul>
              <li>
                <a href="#">Amazon and COVID-19</a>
              </li>
              <li>
                <a href="#">Your Account</a>
              </li>
              <li>
                <a href="#">Your Orders</a>
              </li>
              <li>
                <a href="#">Shipping Rates & Policies</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-nav">
          <div className="footer-logo-area">
            <img
              src="amazon_logo_white.png"
              alt="Amazon Logo"
              className="footer-logo"
            />
            <div className="footer-selector">🌐 English</div>
            <div className="footer-selector">🇺🇸 United States</div>
          </div>
        </div>

        <div className="footer-global-links">
          <a href="#">Amazon Web Services</a>
          <a href="#">Audible</a>
          <a href="#">IMDb</a>
          <p className="footer-copyright">
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Your Ads Privacy Choices</a>
            <span className="copyright-year">
              © 1996-2025, Amazon.com, Inc. or its affiliates
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer