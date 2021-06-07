import React from 'react';
import { Link } from "react-router-dom";
import { getUserProfile } from './services';

const UserButton = () => {
  const { firstName } = getUserProfile();
  return (
    <div className="user-button">
      <Link to="/user-profile">
        {`Welcome ${firstName}`}
      </Link>
    </div>
  );
};

export default UserButton;