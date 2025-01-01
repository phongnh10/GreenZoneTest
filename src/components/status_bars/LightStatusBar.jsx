import React from 'react';
import { StatusBar } from 'react-native';
import colors from '../../constants/color';

const LightStatusBar = () => (
  <StatusBar
    animated={true}
    backgroundColor={colors.white}
    hidden={false}
    barStyle="dark-content"
  />
);

export default LightStatusBar
