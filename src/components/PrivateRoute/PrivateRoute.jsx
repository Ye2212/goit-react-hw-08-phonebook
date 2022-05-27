import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { Title } from './PrivateRoute.styled';
export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Title>CONTACTS BOOK</Title>
      {isLoggedIn && children}
    </>
  );
}
