// Destructuring et type annotations

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
};

// const logWeather = (forecast: {date: Date, weather: string}): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// }

// Optimisation avec ES2015 syntax
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
}

logWeather(todayWeather);