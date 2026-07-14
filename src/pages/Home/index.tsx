import { Link } from "react-router-dom";

import Logo from "../../components/Logo";
import Button from "../../components/Button";

import "./home.css";

function Home() {
  return (
    <main className="home">

      <Logo />

      <div className="home__buttons">

        <Link to="/login">
          <Button>Login</Button>
        </Link>

        <Link to="/register">
          <Button>Register</Button>
        </Link>

      </div>

      <div className="walking-cat">

        🐈‍⬛

      </div>

    </main>
  );
}

export default Home;