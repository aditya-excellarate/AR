import {StyleSheet} from 'react-native';
import React from 'react';
import {
  Viro360Video,
  ViroARScene,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';

const Video360 = () => {
  const renderAR = () => {
    return (
      <ViroARScene>
        <Viro360Video source={require('../res/mediademo_pikeplace_360.mp4')} />
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

export default Video360;

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
