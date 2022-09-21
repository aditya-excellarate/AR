import {StyleSheet} from 'react-native';
import React from 'react';
import {
  Viro360Video,
  Viro3DObject,
  ViroARSceneNavigator,
  ViroNode,
} from '@viro-community/react-viro';

const Scene3D = () => {
  const RenderAR = () => {
    return (
      <ViroNode>
        {/* <Viro3DObject
          position={[-0.0, -5.5, -1.15]}
          source={require('../../res/bball/bball.obj')}
          type="OBJ"
          resources={[require('.')]}
        /> */}
      </ViroNode>
    );
  };
  return (
    <RenderAR />
    // <ViroARSceneNavigator
    //   autofocus={true}
    //   initialScene={{
    //     scene: renderAR,
    //   }}
    //   style={styles.f1}
    // />
  );
};

export default Scene3D;

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
