import { Nav, StyledNavLink } from './Navigation.styled';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Nav>
      <StyledNavLink to="/">Home Page</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="contacts">Contacts</StyledNavLink>}
    </Nav>
  );
};
