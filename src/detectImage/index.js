import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARImageMarker,
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroMaterials,
} from '@viro-community/react-viro';

const InitialScene = () => {
  const [position, setPosition] = useState([0, 0, -70]);
  const [rotation, setRotation] = useState([-60, 0, 0]);
  const [objectScale, setObjectScale] = useState([0.5, 0.5, 1]);
  const [anchor, setAnchor] = useState(false);
  const [positionUpdated, setPositionUpdated] = useState(false);
  ViroMaterials.createMaterials({
    skull: {
      diffuseTexture: require('../../res/skull/Skull.jpg'),
    },
  });

  ViroARTrackingTargets.createTargets({
    skullImage: {
      source: require('../../res/skull/Skull.jpg'),
      orientation: 'Up',
      physicalWidth: 0.165,
    },
  });

  const anchorFound = () => {
    console.log('anchorFound');
    setAnchor(true);
  };

  const onAnchorFound = props => {
    const dummy = [props.position[0], props.position[1], -70];
    setPositionUpdated(true);
    setPosition(dummy);
  };
  return (
    <ViroARScene>
      <ViroARImageMarker
        target="skullImage"
        onAnchorFound={anchorFound}
        onAnchorUpdated={onAnchorFound}
        pauseUpdates={true}
      />
      <ViroAmbientLight color="#FFF" />
      {anchor && (
        <Viro3DObject
          source={require('../../res/skull/Skull.obj')}
          type="OBJ"
          position={position}
          scale={objectScale}
          rotation={rotation}
          resources={[require('../../res/skull/Skull.jpg')]}
          materials={'skull'}
        />
      )}
    </ViroARScene>
  );
};

const DetectImage = () => {
  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{scene: InitialScene}}
        style={{flex: 1}}
      />
    </View>
  );
};

export default DetectImage;

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
