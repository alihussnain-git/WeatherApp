import React from 'react';
import {FlatList} from 'react-native';
import {Hour} from '../../../api/weather/types';
import HourlyForecastItem from './HourlyForecastItem';

interface Props {
  hourlyForecast: Hour[];
}

const ForecastCarousel: React.FC<Props> = ({hourlyForecast}) => (
  <FlatList
    horizontal
    data={hourlyForecast}
    showsHorizontalScrollIndicator={false}
    keyExtractor={item => item.time_epoch.toString()}
    renderItem={({item}) => <HourlyForecastItem item={item} />}
  />
);

export default ForecastCarousel;
