import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  Viro3DObject,
  ViroAmbientLight,
  ViroAnimations,
  ViroARScene,
  ViroARSceneNavigator,
  ViroBox,
  ViroMaterials,
} from '@viro-community/react-viro';

const InitialScene = () => {
  const [object, setObject] = useState('skull');
  const [position, setPosition] = useState([0, 0, -35]);
  const [rotation, setRotation] = useState([0, 5, 0]);
  const [objectScale, setObjectScale] = useState([0.5, 0.5, 1]);

  const moveObject = newPosition => {
    setPosition(newPosition);
    console.log('newpositio', newPosition);
  };
  const rotateRight = () => {
    const arrayNew = [rotation[0] - 100, rotation[1] - 100, rotation[2] - 100];
    setRotation(arrayNew);
  };
  const rotateObject = (rotateState, rotationFactor, source) => {
    console.log('rotation', rotationFactor);
    if (rotateState === 3) {
      let currentRotation = [
        rotation[0] - rotationFactor,
        rotation[1] - rotationFactor,
        rotation[2] - rotationFactor,
      ];
      setRotation(currentRotation);
    }
  };
  const onPinch = (pinchState, scaleFactor, source) => {
    if (pinchState === 3) {
      let currentScale = objectScale[0];
      let newScale = currentScale * scaleFactor;
      let newScaleArray = [newScale, newScale, newScale];
      setObjectScale(newScaleArray);
    }
  };
  console.log('rotate', rotation);
  ViroMaterials.createMaterials({
    cottage: {
      diffuseTexture: require('./cottage/cottage_diffuse.png'),
      // diffuseIntensity:''
    },
  });
  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateY: '+=90',
      },
    },
  });
  return (
    <ViroARScene>
      {/* <ViroBox
          height={5}
          length={5}
          width={5}
          position={[0, 0, -1]}
          scale={[0.05, 0.05, 0.05]}
          materials={'cottage'}
          onRotate={rotateObject}
          //   animation={{name: 'rotate', loop: true, run: true}}
        /> */}
      <ViroAmbientLight color="#FFF" />
      <Viro3DObject
        source={require('./cottage/cottage.obj')}
        type="OBJ"
        position={position}
        scale={objectScale}
        rotation={rotation}
        resources={[require('./cottage/cottage_normal.png')]}
        materials={'cottage'}
        animation={{name: 'rotate', loop: true, run: true}}
        // onDrag={moveObject}
        onRotate={rotateObject}
        onPinch={onPinch}
      />
    </ViroARScene>
  );
};
const SwitchingObjects = () => {
  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        initialScene={{scene: InitialScene}}
        style={{flex: 1}}
      />
    </View>
  );
};

export default SwitchingObjects;

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
