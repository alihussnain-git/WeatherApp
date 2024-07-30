// ErrorHandling.tsx
import React from 'react';
import {Text} from 'react-native';
import {strings} from '../locale/strings';
import {StyleSheet} from 'react-native';
import appTheme from '../theme/appTheme';

interface Props {
  isError: boolean;
}

const ErrorHandling: React.FC<Props> = ({isError}) => (
  <>
    {isError && (
      <>
        <Text style={styles.errorText}>{strings.error.somethingWentWrong}</Text>
        <Text style={styles.errorText}>
          {strings.error.checkInternetConnection}
        </Text>
      </>
    )}
  </>
);

const styles = StyleSheet.create({
  errorText: {
    textAlign: 'center',
    fontSize: appTheme.typography.fontSizes.p,
    color: appTheme.colors.black,
  },
});

export default ErrorHandling;
