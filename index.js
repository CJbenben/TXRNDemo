/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import Routes from './pages/router';
import {name as appName} from './app.json';
// import { createAppContainer } from "react-navigation";

// const AppStackNavigatorContainer = createAppContainer(AppStackNavigator);
AppRegistry.registerComponent(appName, () => App);
