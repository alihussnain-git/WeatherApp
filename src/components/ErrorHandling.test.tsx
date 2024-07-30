import React from 'react';
import ErrorHandling from './ErrorHandling';
import {strings} from '../locale/strings';
import {render} from '@testing-library/react-native';

describe('ErrorHandling', () => {
  it('renders error messages when isError is true', () => {
    const {getByText} = render(<ErrorHandling isError={true} />);

    // Check if the error messages are rendered when isError is true
    expect(getByText(strings.error.somethingWentWrong)).toBeTruthy();
    expect(getByText(strings.error.checkInternetConnection)).toBeTruthy();
  });

  it('does not render error messages when isError is false', () => {
    const {queryByText} = render(<ErrorHandling isError={false} />);

    // Check if the error messages are not rendered when isError is false
    expect(queryByText(strings.error.somethingWentWrong)).toBeNull();
    expect(queryByText(strings.error.checkInternetConnection)).toBeNull();
  });
});
