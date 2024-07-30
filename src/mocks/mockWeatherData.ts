export const mockWeatherData = {
  location: {
    name: 'Berlin',
    country: 'Germany',
  },
  current: {
    temp_c: 25,
    condition: {
      icon: 'example-icon-url',
      text: 'Sunny',
    },
  },
  forecast: {
    forecastday: [
      {
        hour: [
          {
            temp_c: 23,
            condition: {
              icon: 'example-icon-url-1',
            },
            time_epoch: 1643328000,
          },
          {
            temp_c: 24,
            condition: {
              icon: 'example-icon-url-2',
            },
            time_epoch: 1643331600,
          },
        ],
      },
    ],
  },
};
