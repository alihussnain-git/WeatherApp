// src/components/ServiceSwitcher.tsx
import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {useStyles} from '../../../contexts/StyleContext';

const ServiceSwitcher: React.FC = () => {
  const {service, setService} = useStyles();

  // Function to toggle between services
  const toggleService = () => {
    const newService = service === 'serviceA' ? 'serviceB' : 'serviceA';
    setService(newService);
  };

  return (
    <View style={styles.container}>
      <Button
        title={`Switch to ${
          service === 'serviceA' ? 'Service B' : 'Service A'
        }`}
        onPress={toggleService}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default ServiceSwitcher;
