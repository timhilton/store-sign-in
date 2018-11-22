import React, { Component } from 'react';
import Logo from '../elements/Logo';
import Button from '../elements/Button';
import styles from '../styles/Signin.component.style.js';
import { View, Text, TextInput } from 'react-native';
import t from 'tcomb-form-native';
// import {isValidName, isValidEmail} from '../helpers/helpers';
// import { connect } from "react-redux";
// import * as actions from '../actions';

export default class Signin extends Component {
  render(){
    const Form = t.form.Form;

    const Person = t.struct({
      firstName: t.String,
      lastName: t.String,
      email: t.String,
      appointment: t.maybe(t.String)
    });

    const options = {}

    return(
      <View style={styles.container}>
       <Logo/>
       <Form
          ref="form"
          type={Person}
          options={options}
        />
        <Button onPress={this.props.onPress} text="Submit"/>
      </View>
    )
  }
}
// class Signin extends Component {
  // state = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   time: ""
  // };
//
//   setFirstNameChange = (e) => {
//     this.setState({ firstName: e.target.value });
//   }
//
//   setLastNameChange = (e) => {
//     this.setState({ lastName: e.target.value });
//   }
//
//   setEmailChange = (e) => {
//     this.setState({ email: e.target.value });
//   }
//
//   setTimeChange = (e) => {
//     this.setState({ time: e.target.value });
//   }
//
//   handleSubmit = (e) => {
//     e.preventDefault();
//
//     if (!isValidEmail(this.state.email) || !isValidName(this.state.firstName) || !isValidName(this.state.lastName)) {
//       console.log(this.state.email);
//       console.log(this.state.firstName);
//       console.log(this.state.lastName);
//       !isValidEmail(this.state.email) ? this.setState({emailerror:true}) : this.setState({emailerror:false})
//       !isValidName(this.state.firstName) ? this.setState({firstNameerror:true}) : this.setState({firstNameerror:false})
//       !isValidName(this.state.lastName) ? this.setState({lastNameerror:true}) : this.setState({lastNameerror:false})
//     } else {
//       // create the new object
//       const newVisitor = Object.assign({})
//       // build the new object
//       newVisitor.firstName = this.state.firstName
//       newVisitor.lastName = this.state.lastName
//       newVisitor.email = this.state.email
//       newVisitor.time = this.state.time
//
//       this.props.saveVisitor(newVisitor);
//       this.props.reset();
//
//       this.setState({ firstName: '', lastName: '', email: '', emailerror: false, firstNameerror: false, lastNameerror: false});
//     }
// }

//   render(){
//     return (
//         <form noValidate className={this.props.class} onSubmit={this.handleSubmit}>
//           <Logo class='Logo'/>
//
//           <label>First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             onChange={this.setFirstNameChange}
//             className={this.state.firstNameerror ? "error" : ""}
//             value={this.state.firstName}
//           />
//
//           <label>Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             onChange={this.setLastNameChange}
//             className={this.state.lastNameerror ? "error" : ""}
//             value={this.state.lastName}
//           />
//
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             onChange={this.setEmailChange}
//             className={this.state.emailerror ? "error" : ""}
//             value={this.state.email}
//           />
//
//           <label className={this.props.time}>Appointment Time</label>
//           <input
//             type="text"
//             name="time"
//             onChange={this.setTimeChange}
//             className={this.props.time}
//           />
//
//           <Button type="submit" value="submit" text="Sign In"/>
//         </form>
//     )
//   }
// }
//
// export default connect(null, actions)(Signin)
