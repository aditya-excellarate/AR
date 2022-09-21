import {StyleSheet} from 'react-native';
import React from 'react';
import {
  Viro360Image,
  Viro360Video,
  ViroARScene,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';

const Image360 = () => {
  const renderAR = props => {
    return (
      <ViroARScene>
        <Viro360Image
          source={require('../res/360_diving.jpg')}
          scale={[2, 2, 2]}
        />
      </ViroARScene>
    );
  };
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: renderAR,
      }}
      style={styles.f1}
    />
  );
};

export default Image360;

const styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
