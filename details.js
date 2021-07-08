import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions
} from 'react-native';

export default function Details({ navigation }) {
  return (
    <View>
      {/* <View>
            <TextInput 
            style = {styles.input}
            placeholder = 'new todo ....'
            onChangeText = {changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='done' color='#80ced6'/>
            </View> */}
      <Text>{navigation.getParam('text')}</Text>
      {/* <Text>{ navigation.getParam('time') }</Text> */}
    </View>
  );
}
