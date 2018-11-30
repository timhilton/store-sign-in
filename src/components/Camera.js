import React, { Component } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/Camera.component.style.js';
import { RNCamera } from 'react-native-camera';
import Svg, { Rect, G, Text as SVGText } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default class Camera extends Component {
  state = {
    textBlocks: []
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true, pauseAfterCapture: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
      console.log(this.state.textBlocks.map(block => block.value));
      // go to signature page
    }
  };

  textRecognized = object => {
    const { textBlocks } = object;
    this.setState({ textBlocks });
  };

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

        <Svg style={{ position: 'absolute', height: height - 40, width, top: 0, left: 0 }}>
          <G>
            <Rect
              x={100}
              y={150}
              width={width - 200}
              height={height - 300}
              fill="rgba(0,0,0,0)"
              strokeWidth="2"
              strokeDasharray="25"
              stroke="rgb(255,0,0)"
            />
          </G>
        </Svg>
        <View style={{position: 'absolute', height: height - 304, width: width - 204, top: 152, left: 102}}>
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
              onTextRecognized={this.textRecognized}
          >
          </RNCamera>
          <Svg style={{ position: 'absolute', height: height - 300, width: width - 200, top: 0, left: 0 }}>
            {this.state.textBlocks.map(block => this.renderBlock(block))}
          </Svg>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', bottom: 30}}>
        <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14}}> Scan </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={this.props.cancel}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14}}> Cancel </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
