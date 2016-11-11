import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableHighlight,
} from 'react-native';

import BarbellInput from './BarbellInput';
import styles from './Styles';
import BarbellPlateButton from './BarbellPlateButton';

export default class BarbellPlates extends Component {

  _navigate() {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.toolbar}>
          <TouchableHighlight onPress={ this._navigate.bind(this) } style={ styles.toolbarButton }>
            <Text style={styles.toolbarButtonText}>Back</Text>
          </TouchableHighlight>
          <Text style={styles.toolbarTitle}>
            Barbell Calulator: Edit Plates
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.plateInventory}>
            <BarbellPlateButton amount='45'/>
            <BarbellPlateButton amount='35'/>
            <BarbellPlateButton amount='25'/>
            <BarbellPlateButton amount='10'/>
            <BarbellPlateButton amount='5'/>
            <BarbellPlateButton amount='2.5'/>
          </View>
        </View>
      </View>
    );
  }
};
