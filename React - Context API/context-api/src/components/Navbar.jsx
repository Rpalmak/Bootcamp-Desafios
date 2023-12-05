import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
    <nav className="navbar gap-3">
      <Link to="/" > Home </Link> | 
      <Link to="/favoritos" className="me-auto"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
