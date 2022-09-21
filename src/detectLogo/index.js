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
import CategoryScene from './selectedTechnology';

function InitialScene(props) {
  const [position, setPosition] = useState([0, 0, -70]);
  const [rotation, setRotation] = useState([-60, 0, 0]);
  const [objectScale, setObjectScale] = useState([0.5, 0.5, 1]);
  const [anchor, setAnchor] = useState(false);
  const [positionUpdated, setPositionUpdated] = useState(false);
  const navigation = useNavigation();

  function handleClick() {
    console.log('Props', props);
    // navigation.navigate('selectedTechnology', {type: 'BE'});

    props.arSceneNavigator.push('Category', {
      scene: CategoryScene,
      passProps: {displayObject: true},
    });

    // navigation.navigate('SelectedTechnologies', 'FE');
  }

  ViroMaterials.createMaterials({
    line: {
      normalTexture: require('./line.jpg'),
    },
    red: {},
  });

  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateZ: '+=90',
      },
    },
  });

  ViroARTrackingTargets.createTargets({
    skullImage: {
      source: require('./logo.jpg'),
      orientation: 'Up',
      physicalWidth: 0.165,
    },
  });

  const anchorFound = () => {
    console.log('anchorFound', navigation);
    navigation.navigate('selectTechnology');
    setAnchor(true);
  };

  const onAnchorFound = props => {
    const dummy = [props.position[0], props.position[1], -70];
    setPositionUpdated(true);
    setPosition(dummy);
  };

  return (
    <ViroARScene>
      <ViroFlexView
        width={1.5}
        height={0.5}
        radius={1.5}
        position={[0, 1, -5]}
        rotation={[0, 0, 0]}
        backgroundColor="#AAAEEE"
        style={{borderRadius: 0.5}}>
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
          height={0.5}
          onClick={handleClick}
        />
      </ViroFlexView>

      <ViroFlexView
        width={1.5}
        height={0.5}
        radius={1.5}
        position={[2, 1, -5]}
        rotation={[0, 0, 0]}
        backgroundColor="#AAAEEE"
        style={{borderRadius: 0.5}}>
        <ViroText
          text="FE"
          textAlign="center"
          textAlignVertical="center"
          textLineBreakMode="justify"
          textClipMode="clipToBounds"
          color="#000"
          backgroundColor="red"
          style={{backgroundColor: 'red'}}
          width={1.5}
          height={0.5}
          onClick={handleClick}
        />
      </ViroFlexView>

      <ViroFlexView
        width={1.5}
        height={0.5}
        radius={1.5}
        position={[-2, 1, -5]}
        rotation={[0, 0, 0]}
        backgroundColor="#AAAEEE"
        style={{borderRadius: 0.5}}>
        <ViroText
          text="QA"
          textAlign="center"
          textAlignVertical="center"
          textLineBreakMode="justify"
          textClipMode="clipToBounds"
          color="#000"
          backgroundColor="red"
          style={{backgroundColor: 'red'}}
          width={1.5}
          height={0.5}
          onClick={handleClick}
        />
      </ViroFlexView>

      {/* QA polyline */}
      <ViroPolyline
        position={[-2.6, 2.5, -6]}
        points={[
          [0, -1, 0],
          [0, 0, 0],
          [2.5, 0, 0],
        ]}
        thickness={0.01}
        materials={'line'}
      />
      {/* FE polyline */}
      <ViroPolyline
        position={[-0.1, 2.5, -6]}
        points={[
          [0, 0, 0],
          [2.5, 0, 0],
          [2.5, -1.5, 0],
        ]}
        thickness={0.01}
        materials={'line'}
      />
      {/* BE polyline */}
      <ViroPolyline
        position={[0, 1, -6]}
        points={[
          [0, 0, 0],
          [0, 2, 0],
          [0, 0, 0],
        ]}
        thickness={0.01}
        materials={'line'}
      />

      <ViroImage
        source={require('./excellarate.png')}
        position={[0, 3, -5]}
        animation={{name: 'rotate', loop: true, run: true}}
        onClick={handleClick}
      />
    </ViroARScene>
  );
}

const DetectLogo = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{scene: InitialScene}}
        sceneNavigator={{scene: CategoryScene}}
        style={{flex: 1}}
      />
    </View>
  );
};

export default DetectLogo;

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
