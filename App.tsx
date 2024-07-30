import React from 'react';
import {StatusBar} from 'react-native';
import {QueryClientProvider} from 'react-query';
import {StyleProvider} from './src/contexts/StyleContext';
import {queryClient} from './src/react-query/react-query-configs';
import SearchWeatherScreen from './src/screens/weather/SearchWeatherScreen';

const App: React.FC = () => {
  return (
    <StyleProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle="dark-content" />
        <SearchWeatherScreen />
      </QueryClientProvider>
    </StyleProvider>
  );
};

export default App;
