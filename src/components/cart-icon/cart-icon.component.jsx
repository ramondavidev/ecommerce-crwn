import { useDispatch, useSelector } from 'react-redux';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles.jsx';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.ts';
import { setIsCartOpen } from '../../store/cart/cart.action.ts';

const CartIcon = () => {
    const dispatch = useDispatch()

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toogleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toogleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;