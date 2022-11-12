import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header fixed flex aic">
      <div className="logo">
        <img src={require("../UI/olxlogo.png")} alt="olx logo" />
        {/*LOGO ERROR HERE  */}
      </div>

      <div className="location rel">
        <div className="icon-search ico" />
        <input
          className="label s15 font"
          value="INDIA"
          placeholder="Your Location"
        />

        <button className="icon-chevron-down arrow" />
      </div>

      <div className="search flex aic">
        <input
          type="text"
          placeholder="Find cars, Mobiles Phones and more..."
          className=" font s15"
        />

        <button className="icon-search go" />
      </div>

      <div className="actions flex aic">
        <Link to="/account/signin" className="fontb s15">
          Sign In
        </Link>

        <button className="sell">
          <div className="icon-plus" />
          <h2 className="s15 font">Sell</h2>
        </button>
      </div>
    </div>
  );
}

export default Header;
