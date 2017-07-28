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
              labelStyle={styles.label}
              onChange={(checked) => this.handleCheckBoxChange('android', checked)}
              underlayColor="#ffa5b3"
            />
            <CheckBox
              label='iOS'
              labelStyle={styles.label}
              onChange={(checked) => this.handleCheckBoxChange('ios', checked)}
              underlayColor="#ffa5b3"
            />
            <CheckBox
              label='Causes crash'
              labelStyle={styles.label}
              onChange={(checked) => this.handleCheckBoxChange('crash', checked)}
              underlayColor="#ffa5b3"
            />
            <CheckBox
              label='Leaves app in bad state'
              labelStyle={styles.label}
              onChange={(checked) => this.handleCheckBoxChange('label', checked)}
              underlayColor="#ffa5b3"
            />
            <CheckBox
              label='Consistently reproducable'
              labelStyle={styles.label}
              onChange={(checked) => this.handleCheckBoxChange('reproducable', checked)}
              underlayColor="#ffa5b3"
            />
          </View>
          <View style={styles.stepsToReproduceContainer}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              editable={true}
              multiline={true}
              onChangeText={(text) => this.handleTextInputChange(text, 'steps')}
              placeholder="Steps to reproduce"
              placeholderTextColor='#666a6b'
              style={styles.stepsToReproduceText}
            />
          </View>
          <View style={styles.bugLocationContainer}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              editable={true}
              multiline={true}
              onChangeText={(text) => this.handleTextInputChange(text, 'location')}
              placeholder="Location where bug occurs"
              placeholderTextColor='#666a6b'
              style={styles.bugLocationText}
            />
          </View>
          <View style={styles.versionContainer}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              editable={true}
              multiline={true}
              onChangeText={(text) => this.handleTextInputChange(text, 'version')}
              placeholder="Version/s affected"
              placeholderTextColor='#666a6b'
              style={styles.versionText}
            />
          </View>
          <View style={styles.impactContainer}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              editable={true}
              multiline={true}
              onChangeText={(text) => this.handleTextInputChange(text, 'impact')}
              placeholder="Impact"
              placeholderTextColor='#666a6b'
              style={styles.impactText}
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
    backgroundColor: '#ffa5b3',
  },
  container: {
    padding: 30,
  },
  checkBoxContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    color: 'black',
    fontFamily: 'AppleSDGothicNeo-Regular',
    fontSize: 20,
  },
  title: {
    fontFamily: 'AppleColorEmoji',
    fontSize: 30,
    textAlign: 'center',
  },
  stepsToReproduceContainer: {
    borderColor: 'black',
    borderRadius: 7,
    borderWidth: 2,
    height: 100,
    padding: 5,
  },
  stepsToReproduceText: {
    color: 'black',
    fontFamily: 'AppleSDGothicNeo-Regular',
    fontSize: 20,
  },
  bugLocationContainer: {
    borderColor: 'black',
    borderRadius: 7,
    borderWidth: 2,
    height: 50,
    marginTop: 10,
    padding: 5,
  },
  bugLocationText: {
    color: 'black',
    fontFamily: 'AppleSDGothicNeo-Regular',
    fontSize: 20,
  },
  versionContainer: {
    borderColor: 'black',
    borderRadius: 7,
    borderWidth: 2,
    height: 50,
    marginTop: 10,
    padding: 5,
  },
  versionText: {
    color: 'black',
    fontFamily: 'AppleSDGothicNeo-Regular',
    fontSize: 20,
  },
  impactContainer: {
    borderColor: 'black',
    borderRadius: 7,
    borderWidth: 2,
    height: 100,
    marginTop: 10,
    padding: 5,
  },
  impactText: {
    color: 'black',
    fontFamily: 'AppleSDGothicNeo-Regular',
    fontSize: 20,
  },
  buttonView:{
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -10,
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
