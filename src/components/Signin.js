import React, { Component } from 'react';
import Logo from '../elements/Logo';
import Button from '../elements/Button';
import styles from '../styles/Signin.component.style.js';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import {isValidName, isValidEmail, renderIf} from '../helpers/helpers';
import { connect } from "react-redux";
import * as actions from '../actions';

class Signin extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: ""
  };

  setFirstNameChange = (e) => {
    this.setState({ firstName: e });
  }

  setLastNameChange = (e) => {
    this.setState({ lastName: e });
  }

  setEmailChange = (e) => {
    this.setState({ email: e });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(this.state.email) || !isValidName(this.state.firstName) || !isValidName(this.state.lastName)) {
      !isValidEmail(this.state.email) ? this.setState({emailerror:true}) : this.setState({emailerror:false})
      !isValidName(this.state.firstName) ? this.setState({firstNameerror:true}) : this.setState({firstNameerror:false})
      !isValidName(this.state.lastName) ? this.setState({lastNameerror:true}) : this.setState({lastNameerror:false})
    } else {
      // create the new object
      const newVisitor = Object.assign({})
      // build the new object
      newVisitor.firstName = this.state.firstName
      newVisitor.lastName = this.state.lastName
      newVisitor.email = this.state.email

      this.props.saveVisitor(newVisitor);
      this.props.reset();

      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        emailerror: false,
        firstNameerror: false,
        lastNameerror: false
      });
    }
  }

  render(){
    return (
      <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset='-115' behavior="position" contentContainerStyle={styles.container} enabled>
          <Logo class='Logo'/>

          <Text style={styles.firstLabel} >First Name</Text>
          <TextInput
            type="text"
            name="firstName"
            style={this.state.firstNameerror ? styles.inputError : styles.input}
            returnKeyType={"next"}
            onChangeText={this.setFirstNameChange}
            onSubmitEditing={() => { this.secondTextInput.focus(); }}
            blurOnSubmit={false}
            value={this.state.firstName}
          />

          <Text style={styles.label} >Last Name</Text>
          <TextInput
            type="text"
            name="lastName"
            returnKeyType={"next"}
            style={this.state.lastNameerror ? styles.inputError : styles.input}
            onChangeText={this.setLastNameChange}
            ref={(input) => { this.secondTextInput = input; }}
            onSubmitEditing={() => { this.thirdTextInput.focus(); }}
            blurOnSubmit={false}
            value={this.state.lastName}
          />

          <Text style={styles.label} >Email</Text>
          <TextInput
            type="email"
            name="email"
            returnKeyType={"done"}
            style={this.state.emailerror ? styles.inputError : styles.input}
            onChangeText={this.setEmailChange}
            ref={(input) => { this.thirdTextInput = input; }}
            onSubmitEditing={this.handleSubmit}
            value={this.state.email}
          />

          <Button onPress={this.handleSubmit} type="submit" value="submit" text="Sign In"/>
      </KeyboardAvoidingView>
    )
  }
}


export default connect(null, actions)(Signin)
