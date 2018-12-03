import React, { Component } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/Camera.component.style.js';
import { RNCamera } from 'react-native-camera';
import Svg, { Rect, G, Text as SVGText } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default class Camera extends Component {
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
    } else if (scanResult.data.includes('DCS')){
      newScan = scanResult.data.split('DCS');
      newScan = newScan[1].split("\n");
      lastName = newScan[0];
      firstName = newScan[1].split('DCT')[1];

      if(firstName.includes(',')){
        firstName = firstName.replace(/,/g, ' ');
      }
    } else if (scanResult.data.includes('DAB')){
      newScan = scanResult.data.split('DAB');
      console.log(newScan[1]);
    } else {
      console.log(scanResult.data);
    }

    fullName = `${firstName} ${lastName}`
    fullName = fullName.replace(/\s+/g,' ').trim();
    console.log(fullName);

    if (scanResult.data != null) {
      this.setState({
        firstName: firstName,
        lastName: lastName,
        fullName: fullName
      })
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
        <View style={{position: 'absolute', height: height - 300, width: width - 200, top: 150, left: 100}}>
          <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style = {styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}
              onFacesDetected={null}
              // onTextRecognized={this.textRecognized}
              barcodeFinderVisible={this.state.barcodeFinderVisible}
              onBarCodeRead={this.onBarCodeRead.bind(this)}
          >
          </RNCamera>

          <Svg style={{ position: 'absolute', height: height - 40, width, top: 0, left: 0 }}>
            <G>
              <Rect
                x={350}
                y={175}
                width={500}
                height={200}
                fill="rgba(0,0,0,0)"
                strokeWidth="2"
                strokeDasharray="25"
                stroke="rgb(255,0,0)"
              />
            </G>
          </Svg>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', bottom: 30}}>
        <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.button}
        >
            <Text style={styles.buttonText}> Scan </Text>
        </TouchableOpacity>
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
