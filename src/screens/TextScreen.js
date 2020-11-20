import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';


const TextScreen = () => {

  const [password, setPassword] = useState( '' );

  return (
      <View>
        <TextInput
            style={ styles.input }
            autoCapitalize="none"
            autoCorrect={ false }
            value={ password }
            onChangeText={ ( newValue ) => setPassword( newValue ) }
        />
        { password.length >= 5 ? <Text>Current text: { password }</Text>
            : <Text style={ styles.inputError }>
              Password has to be more than 5 characters!</Text>
        }
      </View>
  );
};

const styles = StyleSheet.create( {
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    fontSize: 50
  },
  inputError: {
    fontSize: 20,
    color: 'red'
  }
} );

export default TextScreen;
