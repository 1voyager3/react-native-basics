import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ImageDetails from '../components/ImageDetails';


const ImageScreen = () => {

  return (
      <View>
        <ImageDetails
            title="Forest"
            imageSource={ require( '../../assets/forest.jpg' ) }
            imageScore={ 9 }
        />
        <ImageDetails
            title="Beach"
            imageSource={ require( '../../assets/beach.jpg' ) }
            imageScore={ 7 }
        />
        <ImageDetails
            title="Mountain"
            imageSource={ require( '../../assets/mountain.jpg' ) }
            imageScore={ 4 }
            s/>
      </View>
  );
};

const styles = StyleSheet.create( {} );

export default ImageScreen;