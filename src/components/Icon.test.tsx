import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Icon from './Icon';
import TestId from '../utils/testId';

describe('Icon', () => {
  it('renders icon correctly without onPress', () => {
    const {getByTestId} = render(
      <Icon icon={'someIcon' as any} size={30} testID={TestId.iconTestId} />,
    );

    // Check if the icon is rendered correctly
    expect(getByTestId(TestId.iconTestId)).toBeTruthy();
  });

  it('renders icon correctly with onPress', () => {
    const mockOnPress = jest.fn();
    const {getByTestId} = render(
      <Icon
        icon={'someIcon' as any}
        size={30}
        testID={TestId.iconTestId}
        onPress={mockOnPress}
      />,
    );

    // Check if the icon is rendered correctly with onPress
    const icon = getByTestId(TestId.iconTestId);
    expect(icon).toBeTruthy();

    // Trigger a press event and check if the onPress function is called
    fireEvent.press(icon);
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('renders icon correctly with external URL', () => {
    const {getByTestId} = render(
      <Icon
        url="https://example.com/icon.png"
        size={30}
        testID={TestId.iconTestId}
      />,
    );

    // Check if the icon is rendered correctly with an external URL
    expect(getByTestId(TestId.iconTestId)).toBeTruthy();
  });
});
