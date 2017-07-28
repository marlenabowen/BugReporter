import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class BugReporter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      android: false,
      ios: false,
      crash: false,
      badState: false,
      reproducable: false,
      steps: '',
      location: '',
      version: '',
      impact: '',
    };
  }

  handleCheckBoxChange(field, checked) {
    this.setState({
      [field]: checked
    });
  }

  handleTextInputChange(text, field) {
    this.setState({
      [field]: text
    });
  }

  handleSubmitPressed(){
    console.log(this.state);
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Bug Reporter
          </Text>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              label='Android'
              labelStyle={styles.checkBoxLabel}
              onChange={(checked) => this.handleCheckBoxChange('android', checked)}
              underlayColor="#A5DDFF"
            />
            <CheckBox
              label='iOS'
              labelStyle={styles.checkBoxLabel}
              onChange={(checked) => this.handleCheckBoxChange('ios', checked)}
              underlayColor="#A5DDFF"
            />
            <CheckBox
              label='Causes crash'
              labelStyle={styles.checkBoxLabel}
              onChange={(checked) => this.handleCheckBoxChange('crash', checked)}
              underlayColor="#A5DDFF"
            />
            <CheckBox
              label='Leaves app in bad state'
              labelStyle={styles.checkBoxLabel}
              onChange={(checked) => this.handleCheckBoxChange('label', checked)}
              underlayColor="#A5DDFF"
            />
            <CheckBox
              label='Consistently reproducable'
              labelStyle={styles.checkBoxLabel}
              onChange={(checked) => this.handleCheckBoxChange('reproducable', checked)}
              underlayColor="#A5DDFF"
            />
          </View>
          <View style={styles.largeTextContainer}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              editable={true}
              multiline={true}
              onChangeText={(text) => this.handleTextInputChange(text, 'steps')}
              placeholder="Steps to reproduce"
              placeholderTextColor='#666a6b'
              style={styles.inputText}
            />
          </View>
          <View style={styles.smallTextContainer}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              editable={true}
              multiline={true}
              onChangeText={(text) => this.handleTextInputChange(text, 'location')}
              placeholder="Location where bug occurs"
              placeholderTextColor='#666a6b'
              style={styles.inputText}
            />
          </View>
          <View style={styles.smallTextContainer}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              editable={true}
              multiline={true}
              onChangeText={(text) => this.handleTextInputChange(text, 'version')}
              placeholder="Version/s affected"
              placeholderTextColor='#666a6b'
              style={styles.inputText}
            />
          </View>
          <View style={styles.largeTextContainer}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              editable={true}
              multiline={true}
              onChangeText={(text) => this.handleTextInputChange(text, 'impact')}
              placeholder="Impact"
              placeholderTextColor='#666a6b'
              style={styles.inputText}
            />
          </View>
        </View>
        <View style={styles.buttonView}>
          <View style={styles.buttonContainer}>
            <Button
              color='black'
              onPress={this.handleSubmitPressed.bind(this)}
              title="Submit"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#A5DDFF',
  },
  container: {
    padding: 30,
  },
  checkBoxContainer: {
    flex: 1,
    marginTop: 15,
    marginBottom: 10,
  },
  checkBoxLabel: {
    color: 'black',
    fontFamily: 'AppleSDGothicNeo-Regular',
    fontSize: 20,
  },
  title: {
    fontFamily: 'AppleColorEmoji',
    fontSize: 30,
    textAlign: 'center',
  },
  largeTextContainer: {
    borderColor: 'black',
    borderRadius: 7,
    borderWidth: 2,
    height: 100,
    marginBottom: 5,
    marginTop: 5,
    padding: 5,
  },
  inputText: {
    color: 'black',
    fontFamily: 'AppleSDGothicNeo-Regular',
    fontSize: 20,
  },
  smallTextContainer: {
    borderColor: 'black',
    borderRadius: 7,
    borderWidth: 2,
    height: 50,
    marginBottom: 5,
    marginTop: 5,
    padding: 5,
  },
  buttonView:{
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -15,
  },
  buttonContainer: {
    borderColor: 'black',
    borderRadius: 4,
    borderWidth: 2,
    padding: 5,
    width: 120,
  },
});

AppRegistry.registerComponent('BugReporter', () => BugReporter);
