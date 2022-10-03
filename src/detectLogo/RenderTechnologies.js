import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  ViroAnimations,
  ViroARScene,
  ViroFlexView,
  ViroImage,
  ViroMaterials,
  ViroPolyline,
  ViroText,
} from '@viro-community/react-viro';
const technologyArray = [
  {
    title: 'React',
  },
  {
    title: 'Node',
  },
  {
    title: 'React Native',
  },
  {
    title: 'Angular',
  },
  {
    title: 'Vue',
  },
];
const RenderTechnologies = ({onPressCategory, onPressTechnologyLogo}) => {
  technologyArray?.map((item, index) => {
    const position = index.toString();
    ViroAnimations.registerAnimations({
      ['animation' + index.toString()]: {
        delay: 200 * (technologyArray.length + 1 - index),
        duration: 1000,
        properties: {
          // positionY: -position,
        },
        easing: 'Linear',
      },
      ['show' + index.toString()]: {
        delay: 1500,
        duration: 1000,
        properties: {
          opacity: 1,
        },
        easing: 'Linear',
      },
      ['animationAndshow' + index.toString()]: [
        ['animation' + index.toString(), 'show' + index.toString()],
      ],
    });
  });

  const indexPosition = value => {
    const position = -value;
    const z = 10 + value / 10;
    return [0, position, -10];
  };
  ViroMaterials.createMaterials({
    line: {
      normalTexture: require('./line.jpg'),
    },
    red: {},
  });
  return (
    <ViroARScene>
      {technologyArray?.map((item, index) => (
        <>
          <ViroFlexView
            width={1.5}
            height={0.5}
            radius={1.5}
            position={[1, -index, -10]}
            rotation={[0, 0, 0]}
            backgroundColor="#FFF"
            opacity={0.5}
            borderColor="#000"
            style={{radius: 0.5, opacity: 0, borderRadius: 5}}
            animation={{
              name: `animationAndshow${index}`,
              loop: true,
              run: true,
            }}>
            <ViroText
              text={item?.title}
              textAlign="center"
              textAlignVertical="center"
              textLineBreakMode="justify"
              textClipMode="clipToBounds"
              color="#000"
              style={{backgroundColor: 'red'}}
              width={1.5}
              height={0.5}
            />
          </ViroFlexView>

          <ViroPolyline
            position={[0, -0.1, -10]}
            points={[
              [0, 1, 0],
              [0, -index, 0],
              [0.2, -index, 0],
            ]}
            thickness={0.01}
            materials={'line'}
            opacity={0}
            animation={{
              name: `animationAndshow${index}`,
              loop: true,
              run: true,
            }}
          />
        </>
      ))}
      <ViroImage
        source={require('./excellarate.png')}
        position={[0, 1, -5]}
        // animation={{name: 'animation1', loop: true, run: true}}
        onClick={onPressTechnologyLogo}
      />
    </ViroARScene>
  );
};

export default RenderTechnologies;

const styles = StyleSheet.create({});
