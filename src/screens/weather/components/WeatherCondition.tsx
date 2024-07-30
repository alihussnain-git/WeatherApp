import React from 'react';
import {Text, View} from 'react-native';
import {WeatherData} from '../../../api/weather/types';
import Icon from '../../../components/Icon';
import {useStyles} from '../../../contexts/StyleContext';
import {strings} from '../../../locale/strings';
import appTheme from '../../../theme/appTheme';
import {getImageUrl} from '../../../utils/getImageUrl';

interface Props {
  weather: WeatherData;
}

const WeatherCondition: React.FC<Props> = ({weather}) => {
  const {styles} = useStyles();

  return (
    <>
      <Text style={styles.locationText}>
        {`${weather.location.name}, ${weather.location.country}`}
      </Text>
      <View style={styles.weatherConditionContainer}>
        <View style={styles.temperatureContainer}>
          <Text
            style={
              styles.temperatureText
            }>{`${weather.current.temp_c} ${strings.common.temperatureDegreeC}`}</Text>
        </View>
        <View style={styles.weatherDetailsContainer}>
          <Icon
            url={getImageUrl(weather.current.condition.icon)}
            size={appTheme.icons.xLarge}
          />
          <Text style={styles.conditionText}>
            {weather.current.condition.text}
          </Text>
        </View>
      </View>
    </>
  );
};

export default WeatherCondition;
