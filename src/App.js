
import './App.css';
import Experience from './Components/Experience/Experience';
import Intro from './Components/Intro/Intro';
import NavBar from './Components/NavBar/NavBar';
import Portfolio from './Components/Portfolio/Portfolio';
import Service from './Components/Service/Service';
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
    </div>
  );
}

export default App;
