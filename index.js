import {AppRegistry} from 'react-native';
import {App} from './src/App';
import {name as appName} from './app.json';

// https://reactnavigation.org/docs/stack-navigator/#installation
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
