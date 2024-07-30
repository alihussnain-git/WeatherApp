interface Location {
  name: string;
  country: string;
}

interface Condition {
  icon: string;
  text: string;
}

interface Current {
  temp_c: number;
  condition: Condition;
}

export interface Hour {
  temp_c: number;
  condition: Condition;
  time_epoch: number;
}

interface ForecastDay {
  hour: Hour[];
}

interface Forecast {
  forecastday: ForecastDay[];
}

export interface WeatherData {
  location: Location;
  current: Current;
  forecast: Forecast;
}
