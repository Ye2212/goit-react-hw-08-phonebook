import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoggedIn && children}
      {!isLoggedIn && (
        <p>
          Please <Link to="/login">Log In</Link>
        </p>
      )}
    </>
  );
}
