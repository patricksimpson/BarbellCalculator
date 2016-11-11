import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';

import BarbellInput from './BarbellInput';
import styles from './Styles';
import BarbellPlateButton from './BarbellPlateButton';

export default class BarbellPlates extends Component {


  plates() {
    return [
    { value: 45, label: '45' },
    { value: 35, label: '35' },
    { value: 25, label: '25' },
    { value: 10, label: '10' },
    { value: 5, label: '5' },
    { value: 2.5, label: '2-5' },
    ];
  }

  _navigate() {
    this.props.navigator.pop()
  }

  _getTotal = async () => {
    const PREFIX = '@BarbellCalculatorApp:'
    var total = this.state.total;
    for (let plate of this.plates()) {
      try {
        var amount = await AsyncStorage.getItem(PREFIX + plate.label);
        total = (amount * plate.value) + total;
        this.setState({ total: total });
      } catch(error) {
        alert(error.message);
      }
    }
  };

  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }

  componentDidMount() {
    this._getTotal().done();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.toolbar}>
          <TouchableHighlight onPress={ this._navigate.bind(this) } style={ styles.toolbarButton }>
            <Text style={styles.toolbarButtonText}>Back</Text>
          </TouchableHighlight>
          <Text style={styles.toolbarTitle}>
            Edit Plates
          </Text>
        </View>
        <Text style={styles.instructions}>{ this.state.total } lbs</Text>
        <View style={styles.content}>
          <View style={styles.plateInventory}>
            <BarbellPlateButton value='45' label='45'/>
            <BarbellPlateButton value='35' label='35'/>
            <BarbellPlateButton value='25' label='25'/>
            <BarbellPlateButton value='10' label='10'/>
            <BarbellPlateButton value='5' label='5'/>
            <BarbellPlateButton value='2.5' label='2-5'/>
          </View>
        </View>
      </View>
    );
  }
};
