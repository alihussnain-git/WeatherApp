import React from 'react';
import {Text, View} from 'react-native';
import {WeatherData} from '../../../api/weather/types';
import Icon from '../../../components/Icon';
import {useServiceStyles} from '../../../contexts/ServiceStyleContext';
import {strings} from '../../../locale/strings';
import appTheme from '../../../theme/appTheme';
import {getImageUrl} from '../../../utils/getImageUrl';
import styles from '../../styles';

interface Props {
  weather: WeatherData;
}

const WeatherCondition: React.FC<Props> = ({weather}) => {
  const {styles: appStyles} = useServiceStyles();

  return (
    <>
      <Text style={[styles.locationText, appStyles.textColor]}>
        {`${weather.location.name}, ${weather.location.country}`}
      </Text>
      <View style={styles.weatherConditionContainer}>
        <View style={styles.temperatureContainer}>
          <Text
            style={[
              styles.temperatureText,
              appStyles.textColor,
            ]}>{`${weather.current.temp_c} ${strings.common.temperatureDegreeC}`}</Text>
        </View>
        <View style={styles.weatherDetailsContainer}>
          <Icon
            url={getImageUrl(weather.current.condition.icon)}
            size={appTheme.icons.xLarge}
          />
          <Text style={[styles.conditionText, appStyles.textColor]}>
            {weather.current.condition.text}
          </Text>
        </View>
      </View>
    </>
  );
};

export default WeatherCondition;
