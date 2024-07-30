import React, {createContext, useContext, ReactNode} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import appTheme from '../theme/appTheme';

type StyleContextType = {
  styles: ReturnType<typeof getStyles>;
  service: string;
  setService: (service: string) => void;
};

const StyleContext = createContext<StyleContextType | undefined>(undefined);

const mainContainer: ViewStyle = {
  flex: 1,
  paddingHorizontal: appTheme.spacing.small,
};

const getDynamicTextColor = (backgroundColor: string): string => {
  return backgroundColor === 'black' ? 'white' : 'black';
};

const serviceBackgroundColors = new Map<string, string>([
  ['serviceA', 'white'],
  ['serviceB', 'black'],
]);

export const getStyles = (service: string) => {
  const backgroundColor = serviceBackgroundColors.get(service) || 'white';

  const textColor = getDynamicTextColor(backgroundColor);

  return StyleSheet.create({
    mainContainer: {
      ...mainContainer,
      backgroundColor: backgroundColor,
    },
    safeAreaView: {
      flex: 1,
    },
    locationText: {
      fontSize: appTheme.typography.fontSizes.h4,
      color: textColor,
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
      color: textColor,
    },
    weatherDetailsContainer: {
      alignItems: 'center',
    },
    conditionText: {
      alignSelf: 'center',
      fontSize: appTheme.typography.fontSizes.p,
      color: textColor,
    },
    foreCastText: {
      fontSize: appTheme.typography.fontSizes.h5,
      fontFamily: appTheme.typography.fontFamily.bold,
      color: textColor,
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
    textColor: {
      color: textColor,
    },
    backgroundColor: {
      backgroundColor: backgroundColor,
    },
  });
};

export const StyleProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [service, setService] = React.useState<string>('serviceA');
  const styles = getStyles(service);

  return (
    <StyleContext.Provider value={{styles, service, setService}}>
      {children}
    </StyleContext.Provider>
  );
};

export const useStyles = () => {
  const context = useContext(StyleContext);
  if (context === undefined) {
    throw new Error('useStyles must be used within a StyleProvider');
  }
  return context;
};
