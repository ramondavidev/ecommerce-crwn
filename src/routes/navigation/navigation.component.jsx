import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </>
    )
}

export default Navigation;