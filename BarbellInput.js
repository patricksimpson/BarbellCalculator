import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

export default class BarbellInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        style={this.props.style}
        maxLength={4}
        placeholder='lbs'
        keyboardType='numeric'
      />
    );
  }
}
