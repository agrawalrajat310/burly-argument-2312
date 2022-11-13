import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer flex">
        <div className="block flex flex-col">
          <h2 className="title s16 fontb color">Popular Locations</h2>
          <Link to="/" className="noul noulh font s14 color">
            Kolkata
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Mumbai
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Chennai
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Pune
          </Link>
        </div>

        <div className="block flex flex-col">
          <h2 className="title s16 fontb color">Trending Locations</h2>
          <Link to="/" className="noul noulh font s14 color">
            Bhubaneshwar
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Hyderabad
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Chandigarh
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Nashik
          </Link>
        </div>

        <div className="block flex flex-col">
          <h2 className="title s16 fontb color">About Us</h2>
          <Link to="/" className="noul noulh font s14 color">
            Aout OLX Group
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Careers
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Contact Us
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            OLX People
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Waah Jobs
          </Link>
        </div>

        <div className="block flex flex-col">
          <h2 className="title s16 fontb color">OLX</h2>
          <Link to="/" className="noul noulh font s14 color">
            Help
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Sitemap
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Legal & Privacy Information
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Blog
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            OLX Autos Sell Car
          </Link>
        </div>
      </div>

      <div className="footerb flex">
        <h2 className="cfff font s14">
          Other Countries India - South Africa - Indonesia
        </h2>
        <h2 className="r cfff font s14">All rights reserved © 2006-2022 OLX</h2>
      </div>
    </>
  );
}

export default Footer;
