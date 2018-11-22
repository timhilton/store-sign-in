import React from 'react';
import Welcome from './src/components/Welcome.js';
import Appointment from './src/components/Appointment.js';
import Signin from './src/components/Signin.js';
import styles from './src/styles/App.component.style.js';
import renderIf from './src/helpers/helpers.js';
import { Text, View, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props){
  super(props)

  this.state = {
    welcome: true,
    yes: false,
    no: false
  }

  this.toggleWelcome = this.toggleWelcome.bind(this)
  this.toggleYes = this.toggleYes.bind(this)
  this.toggleNo = this.toggleNo.bind(this)

}
clearState = () => {
  this.setState({
    welcome: true,
    yes: false,
    no: false
  })
}

toggleWelcome = () => {
  this.setState({
    welcome: !this.state.welcome
  })
}

toggleYes = () => {
  this.setState({
    yes: !this.state.yes
  })
}

toggleNo = () => {
  this.setState({
    no: !this.state.no
  })
}

  render() {
    return (
      <View style={styles.container}>
        {renderIf(this.state.welcome,
          <Welcome onPress={this.toggleWelcome} copy={styles.copy}/>
        )}
        {renderIf((!this.state.welcome && !this.state.yes && !this.state.no),
          <Appointment yes={this.toggleYes} no={this.toggleNo} copy={styles.copy}/>
        )}
        {renderIf((!this.state.welcome && (this.state.yes || this.state.no)),
          <Signin onPress={this.clearState} />
        )}
      </View>
    );
  }
}
