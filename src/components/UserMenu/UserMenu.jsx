import { Button } from './UserMenu.styled';
import { LogOutWrapper, Text } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <>
      <LogOutWrapper>
        <Text>Welcome, UserName</Text>
        <Text>e-mail</Text>
        <Button type="button">Log Out</Button>
      </LogOutWrapper>
    </>
  );
};
