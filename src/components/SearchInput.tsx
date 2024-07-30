import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
import {useStyles} from '../contexts/StyleContext';
import {strings} from '../locale/strings';
import appTheme from '../theme/appTheme';
import Icon from './Icon';

interface Props {
  setSearchQuery: (text: string) => void;
  handleSearch: () => void;
  placeHolder: string;
}

const SearchInput: React.FC<Props> = ({
  setSearchQuery,
  handleSearch,
  placeHolder,
}) => {
  const {styles: appStyles} = useStyles();
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchInputContainer}>
        <Icon
          icon="search"
          size={appTheme.icons.small}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          onChangeText={setSearchQuery}
          placeholder={placeHolder}
          placeholderTextColor={appTheme.colors.grey}
        />
      </View>
      <TouchableOpacity onPress={handleSearch}>
        <Text style={[styles.cancelText, appStyles.textColor]}>
          {strings.searchInput.search}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: appTheme.spacing.small,
  },
  errorView: {
    justifyContent: 'center',
  },
  errorText: {
    fontSize: appTheme.typography.fontSizes.h6,
    textAlign: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    backgroundColor: appTheme.colors.lightGrey,
    borderColor: appTheme.colors.lightGrey,
    borderRadius: appTheme.spacing.xxxSmall,
    marginTop: appTheme.spacing.small,
  },
  headingSearchResults: {
    fontSize: appTheme.typography.fontSizes.h4,
    marginTop: appTheme.spacing.small,
    color: appTheme.colors.black,
  },
  searchIcon: {
    marginStart: appTheme.spacing.xxSmall,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: appTheme.spacing.xxSmall,
    paddingVertical: Platform.select({
      android: appTheme.spacing.xxSmall,
      ios: appTheme.spacing.xSmall,
    }),
    color: appTheme.colors.black,
  },
  closeIcon: {
    marginEnd: appTheme.spacing.xxSmall,
  },
  cancelText: {
    marginStart: appTheme.spacing.xxSmall,
    marginTop: appTheme.spacing.xSmall,
  },
});
