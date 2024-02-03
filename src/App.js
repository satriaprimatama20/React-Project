/* eslint-disable no-unused-vars */
import './App.css';
import NavigationBar from './components/navbar';
import Intro from "./components/intro";
import Trending from "./components/trending"
import Superhero from './components/superhero';

import "./style/landingpage.css";
function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBg" >
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      <div className='trending'>
        <Trending />
      </div>
      <div className='superhero'>
        <Superhero />
      </div>

    </div>
  );
}

export default App;
