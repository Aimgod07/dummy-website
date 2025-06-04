
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
      <div className="contain" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Link to="/" className="logo" style={{ marginRight: "auto" }}>
        <img src="../assets/logo.jpg" alt="logo" style={{ height: "45px" }} />
      </Link>
      <ul className="nav-links" style={{ display: "flex", listStyle: "none", marginLeft: "auto" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/samples">Samples</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/buynow">Buy Now</Link></li>
      </ul>
      </div>
    </nav>
    );
}
export default Navbar;