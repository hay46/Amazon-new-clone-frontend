import React from "react";
import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { useStateValue } from '../dataprovider/Dataprovider' // Ensure path is correct
import { Link } from "react-router-dom";
import {auth} from "../../utilitiy/Firebase"

const Header = () => {
  // Use useContext to access your global state
const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div>
      <section className={classes.header}>
        {/* Top Navigation */}
        <section className={classes.header__main}>
          {/* Logo and Address */}
          <div className={classes.header__left}>
            <Link to="/" className={classes.header__logoLink}>
              <img
                className={classes.header__logo}
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon-logo"
              />
            </Link>
            <Link to="/" className={classes.header__location}>
              <SlLocationPin className={classes.header__locationIcon} />
              <div className={classes.header__locationText}>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </Link>
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

            <Link to={!user&&"/Auth"} className={classes.header__link}>
              <div className={classes.header__option}>
                <p className={classes.header__optionLineOne}>{/* Optional chaining ?. ስህተትን ይከላከላል */}
                   </p>
                {user ?
                <>
                   Hello, ({user?.email?.split('@')[0]})
                  <span onClick={()=>auth.signOut()}
                    style={{ cursor: "pointer", fontWeight: "bold", display: "block" }}>Log out</span>
                </> 
            :(
              <>
              <p>Log In</p>
               <span className={classes.header__optionLineTwo}>
                  Account & Lists
                </span>
                </>
              )}
              </div>
            </Link>

            <Link to="/orders" className={classes.header__link}>
              <div className={classes.header__option}>
                <p className={classes.header__optionLineOne}>Returns</p>
                <span className={classes.header__optionLineTwo}>& Orders</span>
              </div>
            </Link>

            <Link to="/Cart" className={classes.header__link}>
              <div className={classes.header__optionBasket}>
                <BiCart className={classes.header__basketIcon} />
                <span
                  className={`${classes.header__optionLineTwo} ${classes.header__basketCount}`}
                >
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
        </section>
      </section>
      <LowerHeader />
    </div>
  );
};

export default Header;