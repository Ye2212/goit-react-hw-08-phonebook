import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Layout } from './components/Layout/Layout';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import { UserMenu } from 'components/UserMenu/UserMenu';
function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="contacts" element={<UserMenu />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
