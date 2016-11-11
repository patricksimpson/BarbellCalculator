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
    return '@BarbellCalculatorApp:' + this.props.label;
  }

  _sub() {
    if (this.state.amount> 0) {
      this._updateStateAmount(-1);
    }
  }

  _add() {
    if (this.state.amount< 50) {
     this._updateStateAmount(1);
    }
  }
  _updateStateAmount(n)  {
    this._saveState((this.state.amount* 1) + n);
  }

  _saveState(n) {
    this.setState({amount: n});
    AsyncStorage.setItem(this._getKey(), JSON.stringify(n));
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  constructor(props) {
    super(props);
    this.state = { amount: 0 }
  }

  _loadInitialState = async () => {
    try {
      var key = this._getKey();
      var amount = await AsyncStorage.getItem(key);
      if (amount !== null){
        this.setState({amount: amount});
      } else {
        AsyncStorage.setItem(key, JSON.stringify(2));
        this.setState({amount: 2});
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View style={styles.plateButtonContainer}>
        <TouchableHighlight onPress={ this._sub.bind(this) }><Text style={ styles.plateButton }>-</Text></TouchableHighlight>
        <Text sryle={styles.plateText}>{this.props.label} x {this.state.amount}</Text>
        <TouchableHighlight onPress={ this._add.bind(this) }><Text style={ styles.plateButton }>+</Text></TouchableHighlight>
      </View>
    );
  }
};
