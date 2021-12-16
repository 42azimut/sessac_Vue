import axios from "axios";

const weatherMixin = {
  data() {
    return {};
  },
  methods: {
    async getWeatherInfo(city) {
      const API_KEY = "5f61e1133d8c9ed8c6e9bf6bb5dd4b64";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.code}&appid=${API_KEY}`;
      const res = await axios.get(url);
      const { main, wind, weather } = res.data;
      const weatherResult = {
        label: city.label,
        code: city.code,
        temperature: this.displayTemperature(main.temp),
        humidity: main.humidity,
        wind: wind.speed,
        icon: `https://openweathermap.org/img/wn/${weather[0].icon}.png`,
      };
      return weatherResult;
    },
    displayTemperature(temperature) {
      return (temperature - 273.15).toFixed(1);
    },
  },
};

export default weatherMixin;
