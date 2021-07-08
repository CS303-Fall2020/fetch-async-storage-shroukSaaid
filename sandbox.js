import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function sandbox() {
  return (
    <View styles={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#333'
  },
  boxOne: {
    backgroundColor: 'violet',
    padding: 10
  },
  boxTwo: {
    backgroundColor: 'gold',
    padding: 20
  },
  boxThree: {
    backgroundColor: 'coral',
    padding: 30
  },
  boxFour: {
    backgroundColor: 'skyblue',
    padding: 40
  }
});
