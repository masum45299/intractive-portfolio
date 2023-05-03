
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

function App() {
  return (
    <div className="App">
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
