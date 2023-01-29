import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const totalItems = useSelector((state) => state.cart.totalQuantity);

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
