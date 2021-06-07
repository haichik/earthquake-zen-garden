import React from 'react';
import { Link } from "react-router-dom";
import { getSiteData } from './services';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img height="40"
          src={getSiteData().logoImage}
          alt="Home"
        />
      </Link>
    </div>
  );
};

export default Logo;