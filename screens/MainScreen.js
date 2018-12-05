import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ChartExample from '../components/ChartExample';
import LineChart from '../components/LineChart';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Today",
  };

  render() {
    return (

      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.currentContainer}>
            <Text style={styles.currentMain}>
              1.5 ft @ 12.9s
            </Text>
            <Text style={styles.currentDir}>
              S (280)
            </Text>
          </View>
          <View>
            <ChartExample></ChartExample>
            <LineChart></LineChart>
          </View>
        </ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
  },

  currentContainer: {
    backgroundColor: '#fff',
    color: '#000',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 20
  },

  currentMain: {
    fontSize: 40,
    lineHeight: 40
  },

  currentDir: {
    fontSize: 30,
    lineHeight: 40,
    marginLeft: 10
  }
});
