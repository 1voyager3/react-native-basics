import React from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';


const BoxScreen = () => {

  return (
      <View style={ styles.viewStyle }>
        <View style={ styles.viewOneStyle }/>
        <View style={ styles.viewTwoStyle }/>
        <View style={ styles.viewThreeStyle }/>
      </View>
  );
};

const styles = StyleSheet.create( {
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    // alignItems: 'space-around',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    backgroundColor: 'red',
    width: 100,
    height: 100,

  },
  viewTwoStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    marginTop: 100,
    alignSelf: 'flex-end'
  },
  viewThreeStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
  }
} );

export default BoxScreen;