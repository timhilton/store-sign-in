import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Image from 'react-native-remote-svg'


export default class Logo extends React.Component {
  render() {

    return (
      <View>
        <Image style={styles.size}
          source={require('../images/xfinity.svg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  size: {
    width: 1000,
    height: 150
  },
})
