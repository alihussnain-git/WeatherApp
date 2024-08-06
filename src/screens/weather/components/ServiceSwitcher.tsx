import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {
  ServiceName,
  useServiceStyles,
} from '../../../contexts/ServiceStyleContext';

const serviceTitles: Record<ServiceName, string> = {
  serviceA: 'Service B',
  serviceB: 'Service A',
};

const ServiceSwitcher: React.FC = () => {
  const {service, setService} = useServiceStyles();

  // Function to toggle between services
  const toggleService = () => {
    const newService: ServiceName =
      service === 'serviceA' ? 'serviceB' : 'serviceA';
    setService(newService);
  };

  return (
    <View style={styles.container}>
      <Button
        title={`Switch to ${serviceTitles[service]}`}
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
