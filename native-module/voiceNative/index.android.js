/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
const SpeechToTextModule = NativeModules.SpeechToText;  

export default class voiceNative extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  Speech() {
    SpeechToTextModule.start()
    .then((resp) => {
      this.setState({ text: resp })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.text}| 
        </Text>
        <Text style={styles.instructions}>
          Press Text below to Start
        </Text>
        <TouchableOpacity onPress={() => this.Speech()}>
          <Text style={styles.instructions}>
            Press To Speech to Text
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('voiceNative', () => voiceNative);
