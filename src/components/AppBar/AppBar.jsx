import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
export const AppBar = () => {
  return (
    <>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </>
  );
};
