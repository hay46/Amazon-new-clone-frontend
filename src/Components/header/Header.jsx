import React from "react";
import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <div>
    <section className={classes.header}>
      {/* Top Navigation */}
      <section className={classes.header__main}>
        {/* Logo and Address */}
        <div className={classes.header__left}>
          <a href="/" className={classes.header__logoLink}>
            <img
              className={classes.header__logo}
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon-logo"
            />
          </a>
          <a href="/" className={classes.header__location}>
            <SlLocationPin className={classes.header__locationIcon} />
            <div className={classes.header__locationText}>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </a>
        </div>

        {/* Search Bar */}
        <div className={classes.header__search}>
          <select className={classes.header__searchSelect}>
            <option value="all">All</option>
            <option value="art">Art</option>
            <option value="books">Books</option>
            <option value="clothing">Clothing</option>
            <option value="computers">Computers</option>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="home">Home</option>
            <option value="toys">Toys</option>
            <option value="sports">Sports</option>
          </select>
          <input
            className={classes.header__searchInput}
            type="text"
            placeholder="Search Amazon.com"
          />
          <div className={classes.header__searchIconContainer}>
            <BsSearch className={classes.header__searchIcon} />
          </div>
        </div>

        {/* Right Side Links */}
        <div className={classes.header__right}>
          <div className={classes.header__language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="flag"
              className={classes.header__flag}
            />
            <select className={classes.header__langSelect}>
              <option value="en">EN</option>
              <option value="am">Am</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
              <option value="es">ES</option>
              <option value="it">IT</option>
              <option value="zh">ZH</option>
            </select>
          </div>

          <a href="/login" className={classes.header__link}>
            <div className={classes.header__option}>
              <p className={classes.header__optionLineOne}>Hello, Sign In</p>
              <span className={classes.header__optionLineTwo}>
                Account & Lists
              </span>
            </div>
          </a>

          <a href="/orders" className={classes.header__link}>
            <div className={classes.header__option}>
              <p className={classes.header__optionLineOne}>Returns</p>
              <span className={classes.header__optionLineTwo}>& Orders</span>
            </div>
          </a>

          <a href="/Cart" className={classes.header__link}>
            <div className={classes.header__optionBasket}>
              <BiCart className={classes.header__basketIcon} />
              <span
                className={`${classes.header__optionLineTwo} ${classes.header__basketCount}`}
              >
                0
              </span>
            </div>
          </a>
        </div>
      </section>
      {/* Lower Navigation */}
      
    </section>
    <LowerHeader />
    </div>
  );
}

export default Header;