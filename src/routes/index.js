import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Video360 from '../Video360';
import Home from '../Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Image360 from '../Image360';
import Scene3D from '../scene3D';
import Object3D from '../Object3D';
import SwitchingObjects from '../SwitchingObjects';
import DetectImage from '../detectImage';
import DetectLogo from '../detectLogo';
import selectTechnology from '../detectLogo/selectTechnology';
import selectedTechnology from '../detectLogo/selectedTechnology';

const Stack = createNativeStackNavigator();
const Routes = () => {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Video360" component={Video360} />
        <Stack.Screen name="Image360" component={Image360} />
        <Stack.Screen name="Object3D" component={Object3D} />
        <Stack.Screen name="Scene3D" component={Scene3D} />
        <Stack.Screen name="SwitchingObjects" component={SwitchingObjects} />
        <Stack.Screen name="DetectImage" component={DetectImage} />
        <Stack.Screen name="DetectLogo" component={DetectLogo} />
        <Stack.Screen name="selectTechnology" component={selectTechnology} />
        <Stack.Screen
          name="selectedTechnology"
          component={selectedTechnology}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
