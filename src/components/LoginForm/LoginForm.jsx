import {LoginWrapper, LoginName} from "./styles.ts";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

function LoginForm() {
  return (
    <LoginWrapper>
      <LoginName>Login form</LoginName>
      <LoginInputContainer>
        <Input
          name="login-email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          name="login-password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </LoginInputContainer>
      <Button type="submit" name="Login" />
    </LoginWrapper>
  );
}

export default LoginForm;
