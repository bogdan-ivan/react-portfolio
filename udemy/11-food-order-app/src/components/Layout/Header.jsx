import React from 'react';
import { Fragment } from 'react/cjs/react.development';
import meals from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onShowCart={onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={meals} alt="meals" />
            </div>
        </Fragment>
    );
};

export default Header;
