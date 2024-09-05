import logo from './logo.svg';
import React from 'react'
import './App.css';
function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    town: "",
    controller: null,
    weather: {}
  }

  // controller = new AbortController()
  API_LINK = `https://geocoding-api.open-meteo.com/v1/search?name=`
  API_WEATHER_LINK = `https://api.open-meteo.com/v1/forecast`

  getWeather = async ()  =>{
    if (this.controller) this.controller.abort("Clean up")
      this.controller = new AbortController()

   try {
    if (this.state.town.length < 2) return this.setState({weather: {}})
    const res = await fetch(`${this.API_LINK}${this.state.town}`, {signal: this.controller.signal})
    const data = await res.json()

    
    if (!data.results) throw new Error("Location not found!") 
    const {latitude, longitude, timezone} = data.results.at(0)

    const resWeather = await fetch(`${this.API_WEATHER_LINK}?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`)
    const dataWeather = await resWeather.json()
    if(dataWeather.error) throw new Error(dataWeather.reason)
      this.setState({ weather: dataWeather.daily})
    console.log(this.state.weather)
   } catch(error) {
    console.error(error)
   }
  }

  updateLocation = (e) => {
    this.setState({ ...this.state, town: e.target.value})
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.town !== prevState.town) {
      this.getWeather()
    }
  }
  

  render () {
    return (<div className="App">
      <h1>CLassy Weather</h1>
      <input className="town-input" onChange={this.updateLocation}></input>
      <WeatherList weather={this.state.weather}/>
    </div>)
}
}

class WeatherList extends React.Component {
  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: time, 
      weathercode: codes
    } = this.props.weather
    return (this.props.weather?.weathercode && (
      <div className="weather-list">

        {codes.map((code, i) => (
          <Weather key={i} code={codes[i]} max={max[i]} min={min[i]} time={time[i]} />
  
        ))}
      </div>
    ))
  }
}

class Weather extends React.Component {
  render() {
    const {max,min,time, code} = this.props;
    return (<div className="weather">
      <p>{getWeatherIcon(code)}</p>
      <p>{max}</p>
      <p>{min}</p>
      <p>{time}</p>
    </div>)
  }
}

export default App;
