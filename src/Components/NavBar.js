import { useNavigate } from 'react-router-dom';
import "../styles/NavBar.css";

function NavBar() {

  const navigate = useNavigate();

  const handleRouteForNavigation = (routes) => {
      switch(routes) {
        case "home":  navigate('/');
                      break;
        case "about": navigate('/about-me');
                      break;
        case "portfolio": navigate('/portfolio');
                      break;
        case "contact": navigate('/contact');
                      break;
        default:      navigate('/');
                      break;
      }
  };

  return (
    <div className="navbar">
      <div className="items">
        <button onClick={() => handleRouteForNavigation("home")}>Home</button>
        <button onClick={() => handleRouteForNavigation("about")}>About Me</button>
        <button onClick={() => handleRouteForNavigation("portfolio")}>Portfolio</button>
        <button onClick={() => handleRouteForNavigation("contact")}>Contact</button>
      </div>
    </div>
  );
}

export default NavBar;