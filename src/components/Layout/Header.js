import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton.js';
import mealsImage from '../../assets/meals.jpg'; // Use the local image
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
