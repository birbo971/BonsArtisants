import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import CreateProducts from '../pages/CreateProducts';
import Home from '../pages/Home';

const AppHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <Link to="/" color='inherit'>
        <Typography variant="title" >
          Les Bons Artisants
        </Typography>
      </Link>
      <div className='nav'>
        <Link to="/create" color='inherit'>
          Create products
        </Link>
      </div>
    </Toolbar>
  </AppBar>
);

export default AppHeader;