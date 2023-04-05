
import './App.css';
import Experience from './Components/Experience/Experience';
import Intro from './Components/Intro/Intro';
import NavBar from './Components/NavBar/NavBar';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Service />
      <Experience/>
    </div>
  );
}

export default App;
