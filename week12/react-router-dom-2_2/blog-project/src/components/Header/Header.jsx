import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav>
        <span className="logo">My Life</span>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
