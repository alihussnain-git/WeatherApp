import {API} from '../../API';
import {API_KEY} from '../../environment';
import {weatherForeCast} from '../endpoints';
import {WeatherData} from '../types';

const WeatherServiceA = {
  getWeather: async (location: string): Promise<WeatherData> => {
    const url = `${weatherForeCast}?key=${API_KEY}&q=${location}`;
    return API.get<WeatherData>(url);
  },
};

export default WeatherServiceA;
