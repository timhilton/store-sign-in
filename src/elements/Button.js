import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

export default class Button extends Component {
 render() {
   return (
     <View>
       <TouchableOpacity
         style={styles.button}
         onPress={this.props.onPress}
       >
         <Text style={styles.buttonText}>{this.props.text}</Text>
       </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 500,
    borderRadius: 40,
    backgroundColor: '#0272b6',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#0272b6',
    width: 200,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 30
  }
});
