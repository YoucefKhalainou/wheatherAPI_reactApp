import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Heading from './components/Heading';
import Information from './components/Information';
import 'weather-icons/css/weather-icons.css';


const api_key = "309d1a9747ca99e413c055803b0c1b9c";

class App extends Component {
  constructor() {
    super();
    this.state = {

      temperature: null,
      city: undefined,
      country: undefined,
      icon: undefined,
      description: "",
      error: "",
      coords: {
        latitude: null,
        longitude: null
      }
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  componentDidMount() {
    //get device location
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.getWeatherByLocation(position.coords.latitude, position.coords.longitude);
      })
    } else {
      alert("Geolocation not available");
    }
  }

  calCelsius(temp) {
    let cel = Math.floor(temp - 273.15);
    return cel
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  getWeatherByLocation = async (lat, lon) => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${api_key}`
    );
    const response = await api_call.json();
    this.setState({
      latitude: lat,
      longititude: lon,
      temperature: this.calCelsius(response.main.temp),
      city: response.name,
      country: response.sys.country,
      description: response.weather[0].description,
      error: false

    });
    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

  };

  getWeatherByCity = async (e) => {
    const city = e.target.elements.city.value;
    e.preventDefault();

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=${api_key}`);
    const response = await api_call.json();

    if (city) {
      this.setState({
        temperature: this.calCelsius(response.main.temp),
        city: response.name,
        country: response.sys.country,
        description: response.weather[0].description,
        error: false
      });
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    }
    else {
      this.setState({
        error: true
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Heading />
        <Form loadWeather={this.getWeatherByCity} error={this.state.error} />
        <Information
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          weatherIcon={this.state.icon}
          description={this.state.description}
          error={this.state.error} />
      </div>);
  }
}

export default App;



