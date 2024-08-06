import React from 'react';
import {View, Text} from 'react-native';
import {Hour} from '../../../api/weather/types';
import Icon from '../../../components/Icon';
import {useServiceStyles} from '../../../contexts/ServiceStyleContext';
import {strings} from '../../../locale/strings';
import appTheme from '../../../theme/appTheme';
import {formatTime} from '../../../utils/formatTime';
import {getImageUrl} from '../../../utils/getImageUrl';
import styles from '../../styles';

interface Props {
  item: Hour;
}

const HourlyForecastItem: React.FC<Props> = ({item}) => {
  const {styles: appStyles} = useServiceStyles();

  const {temp_c, condition, time_epoch} = item;
  return (
    <View style={styles.hourlyForecastItemContainer}>
      <Text
        style={
          appStyles.textColor
        }>{`${temp_c}${strings.common.temperatureDegreeC}`}</Text>
      <Icon
        url={getImageUrl(condition.icon)}
        style={styles.hourlyForecastIcon}
        size={appTheme.icons.xLarge}
      />
      <Text style={appStyles.textColor}>{formatTime(time_epoch)}</Text>
    </View>
  );
};

export default HourlyForecastItem;
