import React from 'react';
import { getUserProfile } from './services';
import { renderField } from './utils';

const UserProfile = () => {
  const { firstName, lastName, phone, email, bio, avatarImage } = getUserProfile();
  return (
    <div className="user-profile">
      <div className="title">Profile</div>
      <div className="profile">
        <div className="photo">
          <img height="150" src={avatarImage} alt="User photo" />
        </div>
        <div className="record">
          {renderField('First name', firstName)}
          {renderField('Last name', lastName)}
          {renderField('Phone', phone)}
          {renderField('Email', email)}
          {renderField('Bio', bio)}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
