import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from '../redux/auth/auth-operations';
import {
  Title,
  Form,
  Label,
  Span,
  Input,
  Button,
} from '../components/Login/Login.styled';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Title>Do You already have an account? Please, log in.</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Span>E-mail</Span>
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            autocomplete="off"
          />
        </Label>

        <label>
          <Span>Password</Span>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
          />
        </label>
        <Button type="submit">Log In</Button>
      </Form>
    </>
  );
}
