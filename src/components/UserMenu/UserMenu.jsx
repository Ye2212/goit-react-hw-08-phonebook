import { Button } from './UserMenu.styled';
import { LogOutWrapper, UserName, Text } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const userEmail = useSelector(authSelectors.getUserEmail);
  return (
    <>
      <LogOutWrapper>
        <UserName>Welcome, {userName}!</UserName>
        <Text>{userEmail}</Text>
        <Button onClick={() => dispatch(authOperations.logOut())} type="button">
          Log Out
        </Button>
      </LogOutWrapper>
    </>
  );
};
