// ErrorHandling.tsx
import React from 'react';
import {Text} from 'react-native';
import {strings} from '../locale/strings';
import {StyleSheet} from 'react-native';
import appTheme from '../theme/appTheme';
import {useServiceStyles} from '../contexts/ServiceStyleContext';

interface Props {
  isError: boolean;
}

const ErrorHandling: React.FC<Props> = ({isError}) => {
  const {styles: appStyles} = useServiceStyles();
  return (
    <>
      {isError && (
        <>
          <Text style={[styles.errorText, appStyles.textColor]}>
            {strings.error.somethingWentWrong}
          </Text>
          <Text style={[styles.errorText, appStyles.textColor]}>
            {strings.error.checkInternetConnection}
          </Text>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  errorText: {
    textAlign: 'center',
    fontSize: appTheme.typography.fontSizes.p,
    color: appTheme.colors.black,
  },
});

export default ErrorHandling;
