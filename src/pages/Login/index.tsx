import "./login.css";

import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Input from "../../components/Input";

function Login() {
  return (
    <main className="login">

      <div className="login-card">

        <Logo />

        <h2>Welcome back!</h2>

        <Input placeholder="Email" />

        <Input
          placeholder="Password"
          type="password"
        />

        <Button>
          Login
        </Button>

      </div>
    </main>
  );
}

export default Login;