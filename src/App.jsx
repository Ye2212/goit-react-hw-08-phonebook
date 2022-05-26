import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Layout } from './components/Layout/Layout';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
