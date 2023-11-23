import "../styles/Home.css";
import NavBar from "./NavBar";
import SocialMedia from "./SocialMedia";

function Home() {
  return (
    <div className="home">
        <NavBar />
        <div className="intro">
            <span>Hey! I am <span>Yash Soni.</span></span>
            <span className="bio">Passionate full-stack developer with a knack for crafting user-friendly websites. 
            I explore creativity through graphic design and photography, and stay active with badminton and basketball.</span>
            <SocialMedia />
        </div>
    </div>
  );
}

export default Home;