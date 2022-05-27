import { Nav, StyledNavLink } from './Navigation.styled';
export const Navigation = () => {
  return (
    <Nav>
      <StyledNavLink to="/">Home Page</StyledNavLink>
      <StyledNavLink to="contacts">Contacts</StyledNavLink>
    </Nav>
  );
};
