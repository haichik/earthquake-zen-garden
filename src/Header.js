import React from 'react';
import Logo from './Logo';
import UserButton from './UserButton';
import { getSiteData } from './services';

const Header = () => {
  const { title } = getSiteData();
  return (
    <div className="header">
      <Logo />
      <div className="main-title">{title}</div>
      <UserButton />
    </div>
  );
};

export default Header;