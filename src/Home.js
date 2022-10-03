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
        <Text style={{color: '#000'}}>Object3D</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('DetectImage')}
        style={{backgroundColor: '#FFF', padding: 20, marginVertical: 10}}>
        <Text style={{color: '#000'}}>DetectImage</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('SwitchingObjects')}
        style={{backgroundColor: '#FFF', padding: 20, marginVertical: 10}}>
        <Text style={{color: '#000'}}>SwitchingObjects</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetectLogo')}
        style={{backgroundColor: '#FFF', padding: 20, marginVertical: 10}}>
        <Text style={{color: '#000'}}>Detect Logo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
