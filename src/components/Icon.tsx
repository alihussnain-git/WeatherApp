import {Image, StyleProp, ImageStyle, TouchableOpacity} from 'react-native';
import React from 'react';
import icons, {IImages} from '../assets/icons/icons';
import TestId from '../utils/testId';

interface IconProps {
  style?: StyleProp<ImageStyle>;
  size?: number;
  icon?: keyof IImages;
  url?: string;
  onPress?: () => void;
  testID?: string;
}

const Icon: React.FC<IconProps> = ({
  style,
  size,
  icon,
  onPress,
  testID,
  url,
}) => {
  const iconComponent = (
    <Image
      testID={testID || TestId.iconTestId}
      source={icon ? icons[icon] : {uri: url}}
      style={[style, {height: size, width: size}]}
    />
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>{iconComponent}</TouchableOpacity>
    );
  }
  return <>{iconComponent}</>;
};

export default Icon;
