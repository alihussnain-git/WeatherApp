import {ImageSourcePropType} from 'react-native';

const icons = {
  search: require('./search.png'),
};

type ImageSrc = ImageSourcePropType;

export interface IImages {
  search: ImageSrc;
}

export default icons as IImages;
