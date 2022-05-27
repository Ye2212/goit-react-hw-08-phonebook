import { MainTitle } from './HomePage.styled';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import {
  Text,
  StyledLink,
} from '../components/PrivateRoute/PrivateRoute.styled';
export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <MainTitle> CONTACTS BOOK</MainTitle>
      {!isLoggedIn && (
        <Text>
          Hello! You need to <StyledLink to="/register">Register</StyledLink> or
          <StyledLink to="/login"> Log In</StyledLink> to continue.
        </Text>
      )}
    </>
  );
}
