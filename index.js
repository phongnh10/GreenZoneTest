/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import DialogSelectShippingMethod from './src/components/bottom_sheets/DialogSelectShippingMethod';
AppRegistry.registerComponent(appName, () => DialogSelectShippingMethod);

