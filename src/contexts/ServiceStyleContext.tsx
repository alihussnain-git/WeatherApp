import React, {createContext, useContext, ReactNode} from 'react';
import {StyleSheet} from 'react-native';

// Define a type for the service names
export type ServiceName = 'serviceA' | 'serviceB';

type ServiceStyleContextType = {
  styles: ReturnType<typeof getStyles>;
  service: ServiceName;
  setService: (service: ServiceName) => void;
};

const ServiceStyleContext = createContext<ServiceStyleContextType | undefined>(
  undefined,
);

const serviceBackgroundColors = new Map<ServiceName, string>([
  ['serviceA', 'white'],
  ['serviceB', 'black'],
]);

export const getStyles = (service: ServiceName) => {
  const backgroundColor = serviceBackgroundColors.get(service) || 'white';
  const textColor = backgroundColor === 'black' ? 'white' : 'black';

  return StyleSheet.create({
    textColor: {
      color: textColor,
    },
    backgroundColor: {
      backgroundColor: backgroundColor,
    },
  });
};

export const ServiceStyleProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [service, setService] = React.useState<ServiceName>('serviceA');
  const styles = getStyles(service);

  return (
    <ServiceStyleContext.Provider value={{styles, service, setService}}>
      {children}
    </ServiceStyleContext.Provider>
  );
};

export const useServiceStyles = () => {
  const context = useContext(ServiceStyleContext);
  if (context === undefined) {
    throw new Error(
      'useServiceStyles must be used within a ServiceStyleProvider',
    );
  }
  return context;
};
