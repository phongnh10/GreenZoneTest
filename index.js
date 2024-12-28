/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import CustomHeader from './src/components/header/CustomHeader';


AppRegistry.registerComponent(appName, () => CustomHeader);

