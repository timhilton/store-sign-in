import React, { Component } from 'react';
import Logo from '../elements/Logo.js';
import Button from '../elements/Button.js';
import styles from '../styles/Welcome.component.style.js';
import { View, Text } from 'react-native';

export default class Welcome extends Component {
  render(){
    return (
      <View style={this.props.style}>
        <View style={styles.container}>
          <Text style={this.props.copy}>Welcome to</Text>
          <Logo style={styles.size}/>
          <Text style={this.props.copy}>Tap "Okay" to continue</Text>
          <Button onPress={this.props.onPress} text="Okay"/>
        </View>
      </View>
    )
  }
}
