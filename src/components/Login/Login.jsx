import { Form, Label, Span, Input, Button } from './Login.styled';

export const Login = () => {
  return (
    <Form>
      <Label>
        <Span>E-mail</Span>
        <Input type="email" name="email" />
      </Label>

      <label>
        <Span>Password</Span>
        <Input type="password" name="password" />
      </label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
