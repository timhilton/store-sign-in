import React, { Component } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/Camera.component.style.js';
import { RNCamera } from 'react-native-camera';
import Svg, { Rect, G, Text as SVGText } from 'react-native-svg';
import { caps } from '../helpers/helpers.js';
import { connect } from "react-redux";
import * as actions from '../actions';

const { width, height } = Dimensions.get('window');

class Camera extends Component {
  state = {
    textBlocks: [],
    firstName: '',
    lastName: '',
    fullName: '',
    barcodeFinderVisible: true
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true, pauseAfterCapture: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
      // console.log(this.state.textBlocks.map(block => block.value));
      console.log(this.state.fullName);
      // console.log(this.state.lastName);

      // go to signature page
    }
  };

  textRecognized = object => {
    const { textBlocks } = object;
    this.setState({ textBlocks });
  };

  onBarCodeRead = scanResult => {
    // console.log(scanResult);
    let newScan;
    let fullName;
    let firstName;
    let lastName;

    if(scanResult.data.includes('DAA')){
      newScan = scanResult.data.split('DAA');
      newScan = newScan[1].split("\n");
      newScan = newScan[0];

      if(newScan.includes(',')) {
        newScan = newScan.split(',');
      } else {
        newScan = newScan.split(' ');
      }

      firstName = `${newScan[1]} ${newScan[2]}`;
      lastName = newScan[0];

      firstName = firstName.replace(/\s+/g,' ').trim();
      lastName = lastName.replace(/\s+/g,' ').trim();
      fullName = `${firstName} ${lastName}`

      console.log(fullName);

      this.setState({
        firstName: firstName,
        lastName: lastName,
        fullName: fullName
      })

    } else if (scanResult.data.includes('DCS')){
      newScan = scanResult.data.split('DCS');
      newScan = newScan[1].split("\n");
      lastName = newScan[0];
      firstName = newScan[1].split('DCT')[1];

      if(firstName.includes(',')){
        firstName = firstName.replace(/,/g, ' ');
      }

      firstName = firstName.replace(/\s+/g,' ').trim();
      lastName = lastName.replace(/\s+/g,' ').trim();
      fullName = `${firstName} ${lastName}`
      console.log(fullName);

      this.setState({
        firstName: firstName,
        lastName: lastName,
        fullName: fullName
      })



    } else if (scanResult.data.includes('DAB')){
      newScan = scanResult.data.split('DAB');
      console.log(newScan[1]);
    } else {
      console.log(scanResult.data);
    }


    if(this.state.fullName != ''){
      const newVisitor = Object.assign({})
      // build the new object
      newVisitor.firstName = this.state.firstName
      newVisitor.lastName = this.state.lastName

      this.props.saveVisitor(newVisitor);
      this.props.confirm();
    }

    return;
  }

  renderBlock = textElement => (
  <G key={textElement.value + textElement.bounds.origin.x}>
    <Rect
      x={textElement.bounds.origin.x}
      y={textElement.bounds.origin.y}
      width={textElement.bounds.size.width}
      height={textElement.bounds.size.height}
      fill="rgba(0,0,0,0)"
      strokeWidth="1"
      stroke="rgb(255,0,0)"
    />
    <SVGText fill="red" x={textElement.bounds.origin.x} y={textElement.bounds.origin.y}>
      {textElement.value}
    </SVGText>
  </G>
);

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.copy}>
            Please position the back of your ID in the viewfinder.
          </Text>
        <View style={{position: 'absolute', height: height - 650, width: width - 800, top: 325, left: 400}}>
          <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style = {styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your device\'s camera'}
              onFacesDetected={null}
              // onTextRecognized={this.textRecognized}
              barcodeFinderVisible={this.state.barcodeFinderVisible}
              onBarCodeRead={this.onBarCodeRead.bind(this)}
          >
          </RNCamera>

          <Svg style={{ position: 'absolute', height: 200, width: 500, top: 175, left: 350 }}>
            {this.state.textBlocks.map(block => this.renderBlock(block))}
          </Svg>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', bottom: 110}}>
          <TouchableOpacity
              onPress={this.props.cancel}
              style = {styles.button}
          >
              <Text style={styles.buttonText}> Cancel </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(null, actions)(Camera)
