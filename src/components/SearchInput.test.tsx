import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchInput from './SearchInput';
import {ServiceStyleProvider} from '../contexts/ServiceStyleContext';

describe('SearchInput', () => {
  it('renders the search input correctly', () => {
    const setSearchQuery = jest.fn();
    const handleSearch = jest.fn();

    const {getByPlaceholderText} = render(
      <ServiceStyleProvider>
        <SearchInput
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          placeHolder="Search..."
        />
      </ServiceStyleProvider>,
    );

    const searchInput = getByPlaceholderText('Search...');

    expect(searchInput).toBeTruthy();
  });

  it('calls setSearchQuery on input change', () => {
    const setSearchQuery = jest.fn();
    const handleSearch = jest.fn();

    const {getByPlaceholderText} = render(
      <ServiceStyleProvider>
        <SearchInput
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          placeHolder="Search..."
        />
      </ServiceStyleProvider>,
    );

    const searchInput = getByPlaceholderText('Search...');

    fireEvent.changeText(searchInput, 'Berlin');

    expect(setSearchQuery).toHaveBeenCalledWith('Berlin');
  });

  it('calls handleSearch on search button press', () => {
    const setSearchQuery = jest.fn();
    const handleSearch = jest.fn();

    const {getByText} = render(
      <ServiceStyleProvider>
        <SearchInput
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          placeHolder="Search..."
        />
        ,
      </ServiceStyleProvider>,
    );

    const searchButton = getByText('Search');

    fireEvent.press(searchButton);

    expect(handleSearch).toHaveBeenCalled();
  });
});
