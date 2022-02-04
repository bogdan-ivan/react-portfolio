import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';

const MealItem = ({ id, name, description, price }) => {
    const cartContext = useContext(CartContext);

    const formattedPrice = `$${price.toFixed(2)}`;

    const onAddToCartHandler = (amount) => {
        cartContext.addItem({
            id,
            name,
            amount,
            price
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3 >{name}</h3>
                <p className={classes.description}>{description}</p>
                <p className={classes.price}>{formattedPrice}</p>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={onAddToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;
