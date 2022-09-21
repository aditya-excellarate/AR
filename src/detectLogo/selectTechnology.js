import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SelectTechnology = ({navigation}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        flex: 1,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('selectedTechnology', {type: 'FE'})}
        style={{
          width: 150,
          height: 150,
          backgroundColor: '#fff',
          borderRadius: 150,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#EEE',
          borderWidth: 2,
        }}>
        <Text>FE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('selectedTechnology', {type: 'BE'})}
        style={{
          width: 150,
          height: 150,
          backgroundColor: '#fff',
          borderRadius: 150,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#EEE',
          borderWidth: 2,
          marginTop: 10,
        }}>
        <Text>BE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('selectedTechnology', {type: 'QA'})}
        style={{
          width: 150,
          height: 150,
          backgroundColor: '#fff',
          borderRadius: 150,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#EEE',
          borderWidth: 2,
          marginTop: 10,
        }}>
        <Text>QA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectTechnology;

const styles = StyleSheet.create({});
