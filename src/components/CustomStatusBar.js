import React from 'react';
import { StatusBar } from "expo-status-bar";
import colors from '../utils/colors';

const CustomStatusBar = ({color, barStyle}) => (
  <>
    <StatusBar
      animated={true}
      backgroundColor={color ? color : colors.colorStatusBar}
      barStyle={barStyle ? barStyle : 'light-content'}
      showHideTransition={'slide'}
      translucent={false}
    />
  </>
);

export {CustomStatusBar};