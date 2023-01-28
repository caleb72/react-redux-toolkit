import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((total, cur) => total + cur.quantity, 0);

  const showCartHandler = (_) => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
