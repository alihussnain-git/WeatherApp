# Weather App

A React Native application for displaying weather forecasts for searched cities using the WeatherAPI.com service. This app provides real-time weather information and features service switching and search functionality.


https://github.com/user-attachments/assets/ce73db77-d767-4dd4-a47b-c2a91da4b2e5



## Prerequisites

Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup)

## Installation

run `yarn`
This command will install all packages and prepare the development environment to run the app.

```
for building ios after yarn install run
1. cd ios
2. pod install
```

## Available scripts

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Run tests

```
yarn test
```

### Run Lint

```
yarn lint
```

## Task

A react native application where the user can input a location and see the weather.
    - It should allow the user to toggle between two weather services.
    - If a location already entered, toggling between services should refresh the UI automatically
    - What if one of the weather service no longer work and how easy is it to replace it with another service?
    - What if the UI needs to adapt to the service that the user has selected? (maybe change colors or images)


## Solution

This app is built with React Native and employs the following technologies:

- React Query: For efficient data fetching, caching, and synchronization.
- Axios: For making API requests.

The app is designed with modularity and scalability in mind. Components and hooks are organized to ensure reusability and maintainability, with a focus on performance optimization and clean architecture. This approach not only meets the project requirements but also prepares the app for future enhancements.

## Design Decisions

- Axios: Chosen for its simplicity and request customization features.
- React Query: Used to manage data fetching and caching, reducing unnecessary API calls and improving component data management.
- Modular Components: Ensures code is maintainable and organized, with reusable components for better scalability.

## Testing Setup

This project includes a robust setup for unit testing to ensure the reliability and functionality of the application. Below is an explanation of the testing libraries used and their purposes:

Testing Libraries Used
- Jest: Jest is the primary testing framework used in this project. It provides a comprehensive test runner, assertion library, and mocking capabilities. Jest is widely used in the JavaScript ecosystem for its simplicity and powerful features.

- @testing-library/react-native: This library is used for testing React Native components. It provides utilities to simulate user interactions and assert the UI behavior. It follows the best practices of testing by focusing on how the user interacts with the app.

- @testing-library/jest-native: This library extends Jest matchers to provide custom matchers for testing React Native components, making assertions more readable and meaningful.

## Known Limitations

- Limited Testing: Automated tests have not been included in this implementation.
- Minimal Styling: The focus was on functionality rather than UI aesthetics.
- Simplified Loading and Error Handling: Loading and Error handling has been kept minimal for the sake of brevity.
- Add support for language and locales, currently hard coded strings added for the sake of simplicity.
- The setup of the environment should be orchestrated through React Native Config, a valuable tool that facilitates the configuration of distinct environments to ensure robust support for varying deployment contexts. Also secrets currently kept in config.ts should never be part of repo directly and store at a secure platform e.g.1password etc.

## Future Enhancements

- Enhanced Testing: Expand automated tests to cover more scenarios.
- AutoComplete while searching location.
- Improved UI/UX: Add more comprehensive styling and user interface enhancements.
- Internationalization: Implement support for multiple languages and locales.
- Environment Management: Integrate React Native Config for managing environment-specific settings and secrets.
