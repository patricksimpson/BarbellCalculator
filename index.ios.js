/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import BarbellCalculator from './app/BarbellCalculator';
import styles from './app/Styles';

export default class BarbellCalculatorApp extends Component {
  renderScene (route, navigator) {
    return <route.component navigator={navigator} />
  }

  render() {
    return (
      <Navigator
        renderScene={ this.renderScene.bind(this) }
        initialRoute={{
          title: 'Barbell Calculator',
          component: BarbellCalculator
        }}
      />
    );
  }
}

AppRegistry.registerComponent('BarbellCalculator', () => BarbellCalculatorApp);
