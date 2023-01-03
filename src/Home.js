import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{padding: 20}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Image360')}
        style={{backgroundColor: '#FFF', padding: 20, marginVertical: 10}}>
        <Text style={{color: '#000'}}>Image360</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Video360')}
        style={{backgroundColor: '#FFF', padding: 20, marginVertical: 10}}>
        <Text style={{color: '#000'}}>Video360</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Object3D')}
        style={{backgroundColor: '#FFF', padding: 20, marginVertical: 10}}>
        <Text style={{color: '#000'}}>Animated 3D object</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('DetectImage')}
        style={{backgroundColor: '#FFF', padding: 20, marginVertical: 10}}>
        <Text style={{color: '#000'}}>DetectImage</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('SwitchingObjects')}
        style={{backgroundColor: '#FFF', padding: 20, marginVertical: 10}}>
        <Text style={{color: '#000'}}>Works on Object3D</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetectLogo')}
        style={{backgroundColor: '#FFF', padding: 20, marginVertical: 10}}>
        <Text style={{color: '#000'}}>Detect Logo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => navigation.navigate('DetectLogo')}
        style={{backgroundColor: '#FFF', padding: 20, marginVertical: 10}}>
        <Text style={{color: '#000'}}>Portals</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
