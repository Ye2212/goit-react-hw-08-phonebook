import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Header, Main, Footer, MainBox } from './Layout.styled';
export const Layout = () => {
  return (
    <MainBox>
      <Header>
        <AppBar />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>All rights reserved</Footer>
    </MainBox>
  );
};
