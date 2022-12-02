import React from 'react';
import 'bulma/css/bulma.min.css';
import '../scripts/script';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/'>
            <div className='navbar-item' href='https://bulma.io'>
              <img
                src='https://bulma.io/images/bulma-logo.png'
                width='112'
                height='28'
                alt=''
              />
            </div>
          </Link>
          <div
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </div>
        </div>
        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <Link to='/'>
              <div className='navbar-item'>Home</div>
            </Link>
            <Link to='/chores/list'>
              <div className='navbar-item'>Chores</div>
            </Link>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <Link to='/sign-up'>
                  <div className='button is-primary'>
                    <strong>Sign up</strong>
                  </div>
                </Link>
                <Link to='/log-in'>
                  <div className='button is-light'>Log in</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
