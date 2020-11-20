import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';


const reducer = ( state, action ) => {
  switch (action.type) {
    case 'INCREASE':
      return { ...state, counter: action.payload };
    case 'DECREASE':
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {

  const [state, dispatch] = useReducer( reducer, {
    counter: 0
  } );

  return (
      <View>
        <Button
            title="Increase"
            onPress={ () => dispatch({ type: 'INCREASE', payload: state.counter + 1}) }
        />
        <Button
            title="Decrease"
            onPress={ () => dispatch({ type: 'DECREASE', payload: state.counter - 1}) }
        />
        <Text>Current Counter: { state.counter }</Text>

      </View>
  );
};

const styles = StyleSheet.create( {} );

export default CounterScreen;