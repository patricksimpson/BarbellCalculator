import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

import styles from './Styles';

export default class BarbellPlateButton extends Component {

  _getKey() {
    return '@BarbellCalculatorApp:' + this.props.amount;
  }

  _sub() {
    if (this.state.value > 0) {
      this._updateStateValue(-1);
    }
  }

  _add() {
    if (this.state.value < 50) {
     this._updateStateValue(1);
    }
  }
  _updateStateValue(n)  {
    this._saveState((this.state.value * 1) + n);
  }

  _saveState(n) {
    this.setState({value: n});
    AsyncStorage.setItem(this._getKey(), JSON.stringify(n));
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  constructor(props) {
    super(props);
    this.state = { value: 0 }
  }

  _loadInitialState = async () => {
    try {
      var key = this._getKey();
      var value = await AsyncStorage.getItem(key);
      if (value !== null){
        this.setState({value: value});
      } else {
        AsyncStorage.setItem(key, JSON.stringify(2));
        this.setState({value: 2});
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View style={styles.plateButtonContainer}>
        <TouchableHighlight onPress={ this._sub.bind(this) }><Text style={ styles.plateButton }>-</Text></TouchableHighlight>
        <Text sryle={styles.plateText}>{this.props.amount} x {this.state.value}</Text>
        <TouchableHighlight onPress={ this._add.bind(this) }><Text style={ styles.plateButton }>+</Text></TouchableHighlight>
      </View>
    );
  }
};
