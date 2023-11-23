import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import './App.css';

// Components
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Error from './Components/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about-me" element={<AboutMe />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
