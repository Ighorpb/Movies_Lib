import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/home">MoviesLib</Link>
      </h2>
      <form>
        <input type="text" placeholder="Busque um filme" />
        <button type="submit"></button>
      </form>
    </nav>
  );
};
