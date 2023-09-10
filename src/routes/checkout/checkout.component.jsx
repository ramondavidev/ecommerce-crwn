import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.contex';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.jsx';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </CheckoutHeader>
            {
                cartItems.map((cartItem) => {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                })
            }
            <Total>Total: {cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default Checkout;