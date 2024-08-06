import {StyleSheet} from 'react-native';
import appTheme from '../theme/appTheme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: appTheme.spacing.small,
  },
  safeAreaView: {
    flex: 1,
  },
  locationText: {
    fontSize: appTheme.typography.fontSizes.h4,
    marginTop: appTheme.spacing.small,
    fontFamily: appTheme.typography.fontFamily.bold,
  },
  weatherConditionContainer: {
    flexDirection: 'row',
    marginTop: appTheme.spacing.small,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  temperatureContainer: {
    alignItems: 'center',
  },
  temperatureText: {
    fontFamily: appTheme.typography.fontFamily.bold,
    fontSize: appTheme.typography.fontSizes.h1,
    marginRight: appTheme.spacing.small,
  },
  weatherDetailsContainer: {
    alignItems: 'center',
  },
  conditionText: {
    alignSelf: 'center',
    fontSize: appTheme.typography.fontSizes.p,
  },
  foreCastText: {
    fontSize: appTheme.typography.fontSizes.h5,
    fontFamily: appTheme.typography.fontFamily.bold,
    marginTop: appTheme.spacing.large,
  },
  hourlyForecastItemContainer: {
    alignItems: 'center',
    marginRight: appTheme.spacing.large,
    marginTop: appTheme.spacing.medium,
  },
  hourlyForecastIcon: {
    marginTop: appTheme.spacing.small,
  },
  loadingIndicator: {
    marginTop: appTheme.spacing.small,
  },
});

export default styles;
