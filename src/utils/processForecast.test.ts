import {processForecast} from './processForecast';

describe('processForecast', () => {
  it('filters hours within the next 12 hours', () => {
    const weatherData = {
      forecast: {
        forecastday: [
          {
            hour: [
              {time_epoch: Math.floor(Date.now() / 1000)},
              {time_epoch: Math.floor(Date.now() / 1000) + 3600},
              {time_epoch: Math.floor(Date.now() / 1000) + 2 * 3600},
              {time_epoch: Math.floor(Date.now() / 1000) + 3 * 3600},
              {time_epoch: Math.floor(Date.now() / 1000) + 4 * 3600},
              {time_epoch: Math.floor(Date.now() / 1000) + 5 * 3600},
              {time_epoch: Math.floor(Date.now() / 1000) + 6 * 3600},
              {time_epoch: Math.floor(Date.now() / 1000) + 7 * 3600},
              {time_epoch: Math.floor(Date.now() / 1000) + 8 * 3600},
              {time_epoch: Math.floor(Date.now() / 1000) + 9 * 3600},
              {time_epoch: Math.floor(Date.now() / 1000) + 10 * 3600},
              {time_epoch: Math.floor(Date.now() / 1000) + 11 * 3600},
              {time_epoch: Math.floor(Date.now() / 1000) + 12 * 3600},
              {time_epoch: Math.floor(Date.now() / 1000) + 13 * 3600}, // 13 hours later (should be excluded)
            ],
          },
        ],
      },
    };

    const processedForecast = processForecast(weatherData as any);
    // Expecting only the next 12 hours to be included
    expect(processedForecast).toHaveLength(12);
  });
});
