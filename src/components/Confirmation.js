import React, { Component } from 'react';
import Logo from '../elements/Logo';
import Button from '../elements/Button';
import styles from '../styles/Signin.component.style.js';
import { View, Text } from 'react-native';
import {isValidName, isValidEmail, renderIf} from '../helpers/helpers';
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import * as actions from '../actions';

class Confirmation extends Component {
  render(){
    const { visitor } = this.props;
    console.log(visitor);
    return (
      <View style={this.props.style}>
        <View style={styles.container}>
          <Logo style={styles.size}/>
          <Text style={this.props.copy}>Welcome {visitor.firstName} {visitor.lastName}</Text>
          <Button onPress={this.props.reset} text="Thanks!"/>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
	visitors: state.visitors,
  visitor: state.visitors[state.visitors.length -1]
})

export default connect(mapStateToProps, null)(Confirmation)
