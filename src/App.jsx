import { Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { Layout } from './components/Layout/Layout';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import authOperations from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

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
