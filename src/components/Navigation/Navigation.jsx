import { Nav, StyledNavLink } from './Navigation.styled';
export const Navigation = () => {
  return (
    <>
      <Nav>
        <StyledNavLink to="/">Home Page</StyledNavLink>
        <StyledNavLink to="/register">Registration</StyledNavLink>
        <StyledNavLink to="/login">Log In</StyledNavLink>
      </Nav>
      <StyledNavLink to="/contacts">Your Contacts</StyledNavLink>
    </>
  );
};
