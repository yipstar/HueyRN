import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigatorIOS, Text, TouchableHighlight, View } from 'react-native';

export default class TodayScreen extends Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
        barTintColor='#f00'
      />
    );
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  _onForward = () => {
    this.props.navigator.push({
      title: 'Scene',
    });
  }

  render() {
    return (
      <View style={{backgroundColor:"blue", flex:1}}>
        <Text style={{flex: 1, color: "green"}}>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
