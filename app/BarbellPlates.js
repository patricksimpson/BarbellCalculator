import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Button
} from 'react-native';

import BarbellInput from './BarbellInput';
import styles from './Styles';

export default class BarbellPlates extends Component {

  _navigate() {
    this.props.navigator.pop()
  }

  _sub() {
    alert('Sub 45');
  }

  _add() {
    alert('Add 45');
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
        <View style={styles.plateInventory}>
          <Button onPress={ this._sub } style={ styles.plateButton } title='-' />
          <Text>45</Text>
          <Button onPress={ this._addj } style={ styles.plateButton } title='+' />
        </View>
      </View>
    );
  }
}
