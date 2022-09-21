// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// const technologies = {
//   FE: ['React Js', 'Angular Js', 'Vue JS', '.Net', 'Python'],
//   BE: ['Node js', 'Python', 'Php'],
// };
// const SelectedTechnology = ({route}) => {
//   const {type} = route?.params;
//   console.log('route', route);
//   return (
//     <View style={{padding: 20, backgroundColor: '#FFF', flex: 1}}>
//       {technologies[type]?.map(item => (
//         <View
//           style={{
//             backgroundColor: 'white',
//             paddingVertical: 20,
//             borderBottomColor: '#EEE',
//             borderBottomWidth: 1,
//           }}>
//           <Text>{item}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default SelectedTechnology;

// const styles = StyleSheet.create({});
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  Viro360Image,
  Viro3DObject,
  ViroAmbientLight,
  ViroAnimatedImage,
  ViroAnimations,
  ViroARImageMarker,
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroButton,
  ViroFlexView,
  ViroImage,
  ViroMaterials,
  ViroPolyline,
  ViroText,
} from '@viro-community/react-viro';
import {useNavigation} from '@react-navigation/native';
const CategoryScene = props => {
  return (
    <ViroARScene>
      <ViroFlexView
        width={1.5}
        height={1.5}
        radius={1.5}
        position={[-1.0, 2, -9.0]}
        rotation={[0, 18, 0]}
        backgroundColor="#FFF"
        ViroStyle={{
          borderRadius: 4.0,
        }}>
        <ViroText
          text="BE"
          textAlign="center"
          textAlignVertical="center"
          textLineBreakMode="justify"
          textClipMode="clipToBounds"
          color="#000"
          backgroundColor="red"
          style={{backgroundColor: 'red'}}
          width={1.5}
          height={1.5}
        />
        <ViroText
          text="BE"
          textAlign="center"
          textAlignVertical="center"
          textLineBreakMode="justify"
          textClipMode="clipToBounds"
          color="#000"
          backgroundColor="red"
          style={{backgroundColor: 'red'}}
          width={1.5}
          height={1.5}
        />
        <ViroText
          text="BE"
          textAlign="center"
          textAlignVertical="center"
          textLineBreakMode="justify"
          textClipMode="clipToBounds"
          color="#000"
          backgroundColor="red"
          style={{backgroundColor: 'red'}}
          width={1.5}
          height={1.5}
        />
      </ViroFlexView>

      <ViroImage
        source={require('./excellarate.png')}
        position={[0, 3, -5]}
        animation={{name: 'rotate', loop: true, run: true}}
        // onClick={handleClick}
      />
    </ViroARScene>
  );
};

// const DetectLogo = ({navigation}) => {
//   return (
//     <View style={styles.mainView}>
//       <ViroARSceneNavigator
//         autofocus={true}
//         initialScene={{scene: CategoryScene}}
//         style={{flex: 1}}
//       />
//     </View>
//   );
// };

export default CategoryScene;

const styles = StyleSheet.create({
  mainView: {
    flexGrow: 1,
  },
  controlsView: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
