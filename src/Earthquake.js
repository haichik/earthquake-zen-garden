import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";import 'antd/dist/antd.css';
import 'Earthquake.css';
import Header from './Header';
import UserProfile from './UserProfile';
import Details from './Details';
import Listing from './Listing';

const Earthquake = () => {
  return (
    <div className="earthquake">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Listing />
          </Route>
          <Route path="/user-profile" exact>
            <UserProfile />
          </Route>
          <Route path="/earthquakes/:id">
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Earthquake;