import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from './StateProvide.js';
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

function Nav() {

  const [{ basket }] = useStateValue();
  // console.log(basket);
  return (
    <nav className="navBar">
      {/* logo   */}
      <Link to="/homePage">
        <img
          className="navBar__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazonLogo"
        />
      </Link>

      {/* searchField */}
      <div className="navBar__searchFiled">
        <input className="navBar__searchFiled__InputFiled" type="text" />
        <SearchIcon className="navBar__searchFiled__searchbtn" />
      </div>

      <div className="navBar__optionsField">
        {/* signin */}
        <Link to="/youraccount" className="navBar__optionsField__link">
          <div className="navBar__optionsField__option">
            <span className="lightTxt">Hello, Admin</span>
            <span className="boldTxt">Account & List</span>
          </div>
        </Link>

        {/* Returns & Order */}
        <Link to="/orderSummary" className="navBar__optionsField__link">
          <div className="navBar__optionsField__option">
            <span className="lightTxt">Returns</span>
            <span className="boldTxt">& Order</span>
          </div>
        </Link>

        {/* yourCart */}
        <Link to="/cart" className="navBar__optionsField__link">
          <div className="navBar__optionsField__option_cart">
            <span>
              <ShoppingCartSharpIcon/>
            </span>
            <span className="boldTxt">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav