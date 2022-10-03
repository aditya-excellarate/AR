import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ViroAnimations,
  ViroARScene,
  ViroARTrackingTargets,
  ViroFlexView,
  ViroImage,
  ViroMaterials,
  ViroPolyline,
  ViroText,
} from '@viro-community/react-viro';
const RenderCategories = ({onPressCategory}) => {
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
    // navigation.navigate('selectTechnology');
    // setAnchor(true);
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
        position={[0, 1, -5]}
        rotation={[0, 0, 0]}
        backgroundColor="#AAAEEE"
        onClick={() => onPressCategory('BE')}>
        <ViroText
          text="BE"
          textAlign="center"
          textAlignVertical="center"
          textLineBreakMode="justify"
          textClipMode="clipToBounds"
          color="#000"
          width={1.5}
          height={0.5}
          onClick={() => onPressCategory('BE')}
        />
      </ViroFlexView>

      <ViroFlexView
        width={1.5}
        height={0.5}
        position={[2, 1, -5]}
        rotation={[0, 0, 0]}
        backgroundColor="#AAAEEE"
        onClick={() => onPressCategory('FE')}>
        <ViroText
          text="FE"
          textAlign="center"
          textAlignVertical="center"
          textLineBreakMode="justify"
          textClipMode="clipToBounds"
          color="#000"
          width={1.5}
          height={0.5}
          onClick={() => onPressCategory('FE')}
        />
      </ViroFlexView>

      <ViroFlexView
        width={1.5}
        height={0.5}
        radius={1.5}
        position={[-2, 1, -5]}
        rotation={[0, 0, 0]}
        backgroundColor="#AAAEEE"
        onClick={() => onPressCategory('QA')}>
        <ViroText
          text="QA"
          textAlign="center"
          textAlignVertical="center"
          textLineBreakMode="justify"
          textClipMode="clipToBounds"
          color="#000"
          width={1.5}
          height={0.5}
          onClick={() => onPressCategory('QA')}
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
        // animation={{name: 'rotate', loop: true, run: true}}
        onClick={onPressCategory}
      />
    </ViroARScene>
  );
};

export default RenderCategories;

const styles = StyleSheet.create({});
