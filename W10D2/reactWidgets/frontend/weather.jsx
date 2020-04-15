import React from 'react';
import ApiKeys from './api_keys';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      temperature: 0,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((res) => {
      this.getWeather(res.coords);
    });
  }

  getWeather({ latitude, longitude }) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiKeys.openWeatherAPI}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const city = data.name;
        const temperature = data.main.temp;
        this.setState({ city, temperature });
      });
  }

  render() {
    const { city, temperature } = this.state;
    return (
      <div>
        <h1>
          City:
          {city}
        </h1>
        <h1>
          Temperature:
          {temperature}
        </h1>
      </div>
    );
  }
}

export default Weather;
