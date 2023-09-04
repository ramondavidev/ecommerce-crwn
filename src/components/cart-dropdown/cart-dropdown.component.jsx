import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button style={{fontWeight: '400', fontSize: '13px'}}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;