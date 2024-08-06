import React, {useCallback, useRef, useState} from 'react';
import {Text, SafeAreaView, ActivityIndicator, View} from 'react-native';
import {WeatherData} from '../../api/weather/types';
import ErrorHandling from '../../components/ErrorHandling';
import SearchInput from '../../components/SearchInput';
import {useServiceStyles} from '../../contexts/ServiceStyleContext';
import {strings} from '../../locale/strings';
import {useWeatherForecast} from '../../react-query/useWeatherForecast';
import {processForecast} from '../../utils/processForecast';
import TestId from '../../utils/testId';
import styles from '../styles';
import ForecastCarousel from './components/ForecastCarousel';
import ServiceSwitcher from './components/ServiceSwitcher';
import WeatherCondition from './components/WeatherCondition';

const defaultCity = 'Berlin';

/**
 * SearchWeatherScreen component for displaying weather forecast.
 * Fetches and displays weather data based on user input.
 */
const SearchWeatherScreen: React.FC = () => {
  const {styles: appStyles, service} = useServiceStyles();

  // Ref to hold the search input value to avoid re-renders on text change
  const searchInputRef = useRef<string>();
  // State to manage the search input value
  const [searchInput, setSearchInput] = useState<string>();

  // Custom hook to fetch weather forecast based on the search input
  const {
    data: weather,
    isLoading,
    isSuccess,
    isError,
  } = useWeatherForecast(searchInput ?? defaultCity, service);

  // Handler for search button press
  const handleSearch = useCallback(() => {
    if (!searchInputRef.current?.trim()) {
      return;
    }
    setSearchInput(searchInputRef.current);
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={[styles.mainContainer, appStyles.backgroundColor]}>
        {/* SearchInput component for user input */}
        <SearchInput
          setSearchQuery={text => {
            searchInputRef.current = text;
          }}
          handleSearch={handleSearch}
          placeHolder={strings.weatherScreen.searchPlaceHolder}
        />
        <ServiceSwitcher />
        {isSuccess && (
          <>
            {/* WeatherCondition component to display current weather condition */}
            <WeatherCondition weather={weather as WeatherData} />
            <Text style={[styles.foreCastText, appStyles.textColor]}>
              {strings.weatherScreen.fiveHourForecast}
            </Text>
            {/* ForecastCarousel component to display hourly forecast */}
            <ForecastCarousel hourlyForecast={processForecast(weather)} />
          </>
        )}
        {/* ErrorHandling component to display error messages */}
        <ErrorHandling isError={isError} />
        {isLoading && (
          // Display loading indicator when fetching data
          <ActivityIndicator
            style={styles.loadingIndicator}
            size="large"
            testID={TestId.loadingIndicator}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchWeatherScreen;
