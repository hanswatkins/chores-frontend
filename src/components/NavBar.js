import React from 'react';
import 'bulma/css/bulma.min.css';
import '../scripts/script';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import ChorePage from './ChorePage';

const NavBar = () => {
  return (
    <div>
      <nav class='navbar' role='navigation' aria-label='main navigation'>
        <div class='navbar-brand'>
          <Link to='/'>
            <a class='navbar-item' href='https://bulma.io'>
              <img
                src='https://bulma.io/images/bulma-logo.png'
                width='112'
                height='28'
              />
            </a>
          </Link>
          <a
            role='button'
            class='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div id='navbarBasicExample' class='navbar-menu'>
          <div class='navbar-start'>
            <Link to='/'>
              <a class='navbar-item'>Home</a>
            </Link>
            <Link to='/chores/list'>
              <a class='navbar-item'>Chores</a>
            </Link>
          </div>
          <div class='navbar-end'>
            <div class='navbar-item'>
              <div class='buttons'>
                <Link to='/sign-up'>
                  <a class='button is-primary'>
                    <strong>Sign up</strong>
                  </a>
                </Link>
                <Link to='/log-in'>
                  <a class='button is-light'>Log in</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chores/list' element={<ChorePage />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/log-in' element={<LogIn />} />
      </Routes>
    </div>
  );
};

export default NavBar;
