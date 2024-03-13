import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Speisekarte</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/openinghours">OpeningHours</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
      </nav>
    </header>
  );
};

export default Header;
