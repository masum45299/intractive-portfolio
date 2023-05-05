import './App.css';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import NavBar from './Components/NavBar/NavBar';
import Portfolio from './Components/Portfolio/Portfolio';
import Service from './Components/Service/Service';
import Testimonials from './Components/Testimonials/Testimonials';
import Works from './Components/Works/Works';
import { themeContext } from './Context';
import { useContext } from 'react';

function App() {

  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className="App"
     style={{background: darkMode? "black": "",
      color: darkMode? "white":""
    }}
    >
      <NavBar />
      <Intro />
      <Service />
      <Experience/>
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
