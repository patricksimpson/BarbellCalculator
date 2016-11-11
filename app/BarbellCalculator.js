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
      <View style={styles.container}>
        <View style={styles.topMenu}>
          <Text style={styles.title}>
            Barbell Calulator
          </Text>
          <TouchableHighlight onPress={ this._navigate.bind(this) } style={ styles.button }>
            <Text>Plates</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.main}>
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
