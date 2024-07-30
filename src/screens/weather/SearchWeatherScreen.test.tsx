import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import {useWeatherForecast as mockUseWeatherForecast} from '../../react-query/useWeatherForecast';
import SearchWeatherScreen from './SearchWeatherScreen';
import {mockWeatherData} from '../../mocks/mockWeatherData';
import {strings} from '../../locale/strings';
import TestId from '../../utils/testId';
import {StyleProvider} from '../../contexts/StyleContext';

jest.mock('../../react-query/useWeatherForecast');

describe('SearchWeatherScreen', () => {
  beforeEach(() => {
    // Mock the useWeatherForecast hook with sample data
    (mockUseWeatherForecast as jest.Mock).mockReturnValue({
      data: mockWeatherData,
      isLoading: false,
      isSuccess: true,
      isError: false,
    });
  });

  it('renders search input and handles search', async () => {
    const {getByPlaceholderText, getByText} = render(
      <StyleProvider>
        <SearchWeatherScreen />
      </StyleProvider>,
    );

    const searchInput = getByPlaceholderText(
      strings.weatherScreen.searchPlaceHolder,
    );
    fireEvent.changeText(searchInput, 'Berlin');

    const searchButton = getByText(strings.searchInput.search);
    fireEvent.press(searchButton);

    // Wait for the component to render with new data after search
    await waitFor(() => {
      expect(getByText('Berlin, Germany')).toBeTruthy();
      expect(getByText('Forecast for the next 12 hours:')).toBeTruthy();
    });
  });

  it('renders loading indicator while fetching data', async () => {
    (mockUseWeatherForecast as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isSuccess: false,
      isError: false,
    });

    const {getByTestId} = render(
      <StyleProvider>
        <SearchWeatherScreen />
      </StyleProvider>,
    );
    const loadingIndicator = getByTestId(TestId.loadingIndicator);

    // Wait for the loading indicator to be present in the DOM
    await waitFor(() => {
      expect(loadingIndicator).toBeTruthy();
    });
  });
  it('renders weather condition', async () => {
    const {getByText} = render(
      <StyleProvider>
        <SearchWeatherScreen />
      </StyleProvider>,
    );

    // Wait for the component to render with weather data
    await waitFor(() => {
      expect(getByText('Sunny')).toBeTruthy();
    });
  });

  it('toggles services and updates the UI', async () => {
    const {getByText} = render(
      <StyleProvider>
        <SearchWeatherScreen />
      </StyleProvider>,
    );

    // Check initial state with serviceA
    expect(getByText('Switch to Service B')).toBeTruthy();

    // Simulate toggling to serviceB
    fireEvent.press(getByText('Switch to Service B'));

    // Ensure serviceB is selected and the UI is updated accordingly
    expect(getByText('Switch to Service A')).toBeTruthy();
  });
});
