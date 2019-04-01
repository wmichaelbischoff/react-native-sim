import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './Components/Dashboard/Dashboard';
import House from './Components/House/House';
import Wizard from './Components/Wizard/Wizard';
import Header from './Components/Header/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Dashboard />
        <House />
        <Wizard />
        <Header />
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
