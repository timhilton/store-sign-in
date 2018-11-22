import React, { Component } from 'react';
import Logo from '../elements/Logo.js';
import Button from '../elements/Button.js';
import styles from '../styles/Appointment.component.style.js';
import { View, Text } from 'react-native';

export default class Appointment extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Logo/>
        <Text style={this.props.copy}>Do you have an appointment?</Text>
        <View style={styles.row}>
          <Button onPress={this.props.yes} text="Yes" />
          <Button onPress={this.props.no} text="No" />
        </View>
      </View>
    )
  }
}
