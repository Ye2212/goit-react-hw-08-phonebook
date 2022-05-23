import { StyledNavLink } from './Navigation.styled';
export const Navigation = () => {
  return (
    <div>
      <StyledNavLink to="/">Home Page</StyledNavLink>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
      <StyledNavLink to="/contacts">Your Contacts</StyledNavLink>
    </div>
  );
};
