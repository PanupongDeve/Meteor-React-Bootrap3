import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import indexRoutes from '../imports/routes';



Meteor.startup(() => {
  ReactDOM.render(
    <Router>
      <Switch>
      {
        indexRoutes.map((route) => {
          return (
            <Route 
              exact path={route.path}
              key={route.name}
              component={route.component}
            />
          );
        })
      }
      </Switch>
    </Router>
    , document.getElementById('app'));
});