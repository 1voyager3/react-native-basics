import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {

  return (

      <View>
        <Text style={ style.textStyle }>
          Component Screen
        </Text>
        <Text style={ style.subHeader }>
          Hi there!
        </Text>
      </View>
  );
};

const style = StyleSheet.create( {
  textStyle: {
    fontSize: 30
  },
  subHeader: {
    fontSize: 20
  }

} );

export default ComponentsScreen;