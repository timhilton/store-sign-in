import React, { Component } from 'react';
import Logo from '../elements/Logo.js';
import Button from '../elements/Button.js';
import styles from '../styles/Scan.component.style.js';
import { View, Text } from 'react-native';

export default class Scan extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Logo/>
        <Text style={this.props.copy}>Would you like to scan your ID to sign in?</Text>
        <View style={styles.row}>
          <Button onPress={this.props.yes} text="Yes" />
          <Button onPress={this.props.no} text="No" />
        </View>
      </View>
    )
  }
}
