import "./register.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { register } from "../../services/auth";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!username || !password || !confirmPassword) {
      alert("Lütfen tüm alanları doldur.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Şifreler eşleşmiyor.");
      return;
    }

    try {
      setLoading(true);

      await register(username, password);

      navigate("/chat");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login">
      <div className="login-card">
        <Logo />

        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button
          disabled={loading}
          onClick={handleRegister}
        >
          {loading ? "Creating..." : "Create Account"}
        </Button>
      </div>
    </main>
  );
}

export default Register;