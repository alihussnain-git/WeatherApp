import {Hour, WeatherData} from '../api/weather/types';

/**
 * Process the forecast data and filter the hours for the next 12 hours.
 * @param {WeatherData} weather - The weather data containing forecast information.
 * @returns {Hour[]} - An array of Hour objects representing the forecast for the next 5 hours.
 */
export const processForecast = (weather: WeatherData): Hour[] => {
  // Get the current epoch time in seconds
  const currentHourEpoch = Math.floor(Date.now() / 1000);

  // Filter the hours for the next 12 hours
  return weather.forecast.forecastday[0].hour.filter(
    hour =>
      hour.time_epoch > currentHourEpoch &&
      hour.time_epoch <= currentHourEpoch + 12 * 3600,
  );
};
