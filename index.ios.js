/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import BarbellCalculator from './BarbellCalculator';

export default class BarbellCalculatorApp extends Component {
  render() {
    return (
        <BarbellCalculator/>
    );
  }
}

AppRegistry.registerComponent('BarbellCalculatorApp', () => BarbellCalculatorApp);
