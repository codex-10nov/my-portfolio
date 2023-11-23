import "../styles/Error.css";
import NavBar from "./NavBar";

function Error() {
  return (
    <div className="error">
        <NavBar />
        <div className="message">
            <span>404</span>
            <span className="text">Page Not Found</span>
        </div>
    </div>
  );
}

export default Error;