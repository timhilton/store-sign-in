import React, { Component } from 'react';
import Logo from '../elements/Logo';
import Button from '../elements/Button';
import styles from '../styles/Signin.component.style.js';
import { View, Text, TextInput } from 'react-native';
import {isValidName, isValidEmail} from '../helpers/helpers';
import { connect } from "react-redux";
import * as actions from '../actions';

class Signin extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    time: ""
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

  setTimeChange = (e) => {
    this.setState({ time: e });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(this.state.email) || !isValidName(this.state.firstName) || !isValidName(this.state.lastName)) {
      console.log(this.state.email);
      console.log(this.state.firstName);
      console.log(this.state.lastName);
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
      newVisitor.time = this.state.time

      this.props.saveVisitor(newVisitor);
      this.props.reset();

      this.setState({ firstName: '', lastName: '', email: '', emailerror: false, firstNameerror: false, lastNameerror: false});
    }
}

  render(){
    return (
      <View style={styles.container}>
          <Logo class='Logo'/>

          <Text style={styles.firstLabel} >First Name</Text>
          <TextInput
            type="text"
            name="firstName"
            style={this.state.firstNameerror ? styles.inputError : styles.input}
            onChangeText={this.setFirstNameChange}
            value={this.state.firstName}
          />

          <Text style={styles.label} >Last Name</Text>
          <TextInput
            type="text"
            name="lastName"
            style={this.state.lastNameerror ? styles.inputError : styles.input}
            onChangeText={this.setLastNameChange}
            value={this.state.lastName}
          />

          <Text style={styles.label} >Email</Text>
          <TextInput
            type="email"
            name="email"
            style={this.state.emailerror ? styles.inputError : styles.input}
            onChangeText={this.setEmailChange}
            value={this.state.email}
          />

          <Text style={styles.label} >Appointment Time</Text>
          <TextInput
            type="text"
            name="time"
            style={styles.input}
            onChangeText={this.setTimeChange}
          />

          <Button onPress={this.handleSubmit} type="submit" value="submit" text="Sign In"/>
      </View>
    )
  }
}


export default connect(null, actions)(Signin)
