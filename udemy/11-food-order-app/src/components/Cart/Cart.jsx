import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = ({ onHideCart }) => {

    const cartContext = useContext(CartContext);
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const cartItemAddHandler = (item) => {
        cartContext.addItem({ ...item, amount: 1 });
    };
    const cartItemRemoveHandler = (id) => {
        cartContext.removeItem(id);
    };

    const cartItems = <ul className={classes['cart-items']}>
        {cartContext.items.map((item) =>
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                //pre-configures a function with what to receive when its being executed
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)} />
        )}
    </ul>;

    return <Modal onHideCart={onHideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={onHideCart}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>;
};

export default Cart;
