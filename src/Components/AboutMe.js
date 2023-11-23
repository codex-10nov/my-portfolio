import "../styles/AboutMe.css";
import NavBar from "./NavBar";

import profilePhoto from "../assets/me.jpeg"

function AboutMe() {
  return (
    <div className="about-me">
        <NavBar />
        <div className="body">
            <div className="main-container">
                <img src={profilePhoto}/>
            </div>
        </div>
    </div>
  );
}

export default AboutMe;