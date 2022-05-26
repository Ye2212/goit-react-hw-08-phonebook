// import { StyledNavLink } from 'components/Navigation/Navigation.styled';
import { AuthNavWrapper, StyledNavLink } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <StyledNavLink to="/register">Sign Up</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </AuthNavWrapper>
  );
};
