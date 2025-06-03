
import { Link,useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    // For example, clear user data, tokens, etc.
    console.log("User logged out");
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/samples">Samples</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/buynow">Buy Now</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;