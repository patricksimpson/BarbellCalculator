import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import BarbellInput from './BarbellInput';
import BarbellPlates from './BarbellPlates';
import styles from './Styles';

export default class BarbellCalculator extends Component {

  plates = {
    title: 'Barbell Calculator: Plates',
    component: BarbellPlates,
  }

  _navigate() {
    this.props.navigator.push(this.plates);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarTitle}>
            Barbell Calculator
          </Text>
          <TouchableHighlight onPress={ this._navigate.bind(this) } style={ styles.toolbarButton }>
            <Text style={styles.toolbarButtonText}>Plates</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.content}>
          <Text style={styles.instructions}>
            Add weight to your plate inventory and calculate weight on your barbell below.
          </Text>
          <View style={styles.inputContainer}>
            <BarbellInput style={styles.barbellInput} />
          </View>
        </View>
      </View>
    );
  }
};
