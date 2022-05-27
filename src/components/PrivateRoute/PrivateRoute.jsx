import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { Text, Title, StyledLink } from './PrivateRoute.styled';
export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Title>CONTACTS BOOK</Title>
      {isLoggedIn && children}
      {!isLoggedIn && (
        <Text>
          Hello! You need to <StyledLink to="/register">Register</StyledLink> or
          <StyledLink to="/login">Log In</StyledLink> to continue.
        </Text>
      )}
    </>
  );
}
