import logo from './logo.svg';
import './App.css';
import useLocation from './useLocation.js'
import {useState} from 'react'
function App() {
  
  const {lat, long, isLoading, number, setPosition} = useLocation()
  
  const getPosition = () => {
    setPosition()
  }

  const openLink = () => {
    const LINK = `https://www.openstreetmap.org/#map=16/${lat}/${long}`
    window.location = LINK
  }

  return (
    <div className="App">
      <button onClick={() => getPosition()}>Show my location</button>
      <br></br>
      {isLoading ? <p>Loading...</p> : <div><a href="#" onClick={() => openLink()}>{lat}</a>
      &nbsp;
      <a href="#" onClick={() => openLink()}>{long}</a></div>}
      <p>You have clicked a total of {number}</p>
    </div>
  );
}

export default App;
