import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Events extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Events Tab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
