import {ServiceName} from '../../contexts/ServiceStyleContext';
import {WeatherData} from './types';

const weatherServiceModules: Record<
  ServiceName,
  () => Promise<{getWeather: (location: string) => Promise<WeatherData>}>
> = {
  serviceA: () =>
    import('../weather/services/WeatherServiceA').then(module => ({
      getWeather: module.default.getWeather,
    })),
  serviceB: () =>
    import('../weather/services/WeatherServiceA').then(module => ({
      getWeather: module.default.getWeather,
    })),
};

export async function getWeatherService(
  serviceName: ServiceName,
): Promise<{getWeather: (location: string) => Promise<WeatherData>}> {
  const serviceModule = weatherServiceModules[serviceName];
  if (serviceModule) {
    return serviceModule();
  }
  throw new Error(`Service ${serviceName} not found`);
}
