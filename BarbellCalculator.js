import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import BarbellInput from './BarbellInput';
import styles from './Styles';

export default class BarbellCalculator extends Component {
    static get defaultProps() {
    return {
      title: 'BarbellCalculator'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Barbell Calculator
        </Text>
        <Text style={styles.instructions}>
        Add weight to your plate inventory and calculate weight on your barbell.
        </Text>
        <View style={styles.inputContainer}>
          <BarbellInput style={styles.barbellInput} />
        </View>
      </View>
    );
  }
}
