import {useQuery, UseQueryResult} from 'react-query';
import {WeatherData} from '../api/weather/types';
import {getWeatherService} from '../api/weather/weatherServiceFactory';

const WEATHER_REQUEST = 'weather_request';

export const useWeatherForecast = (
  searchCity: string,
  selectedService: string,
): UseQueryResult<WeatherData> => {
  return useQuery([WEATHER_REQUEST, searchCity, selectedService], async () => {
    const service = await getWeatherService(selectedService);
    return service.getWeather(searchCity);
  });
};
