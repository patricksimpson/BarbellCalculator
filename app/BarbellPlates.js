import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableHighlight,
} from 'react-native';

import BarbellInput from './BarbellInput';
import styles from './Styles';

export default class BarbellPlates extends Component {

  _navigate() {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topMenu}>
          <Text style={styles.title}>
            Barbell Plates
          </Text>
          <TouchableHighlight onPress={ this._navigate.bind(this) } style={ styles.button }>
            <Text>Back</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
