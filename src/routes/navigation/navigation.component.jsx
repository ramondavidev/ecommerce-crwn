import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.contex';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    return (
      <>
        <NavigationContainer>
            <LogoContainer className='logo-container' to='/'>
                <CrwnLogo className='logo' />
            </LogoContainer>
          <NavLinks>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            {
              currentUser ? 
                <NavLink as='span' className='nav-link' onClick={signOutUser}>SIGN OUT</NavLink>
              :    
              <NavLink to='/auth'>
                  SIGN IN
              </NavLink>
            }
            <CartIcon onClick={() => setIsCartOpen} />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </>
    )
}

export default Navigation;