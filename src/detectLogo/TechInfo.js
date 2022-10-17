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
import {useState} from 'react';
const detectedPosition = [0, 0, 0];

const staticTechnologyArray = [
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
  {
    title: 'HTML',
  },
  {
    title: 'CSS',
  },
  {
    title: 'Javascript',
  },
  {
    title: 'Flutter',
  },
  {
    title: 'Swift',
  },
  {
    title: 'Kotlin',
  },
  {
    title: 'Redux',
  },
  {
    title: 'Php',
  },
  {
    title: 'Web3.0',
  },
  {
    title: 'Bootstrap',
  },
];

const positions = [
  [detectedPosition[0], detectedPosition[0], -10],
  [detectedPosition[0] + 2, detectedPosition[0] + 2, -10],
  [detectedPosition[0] - 3, detectedPosition[0] + 2, -10],
  [detectedPosition[0] - 2, detectedPosition[0] + 5, -10],
  [detectedPosition[0] + 1, detectedPosition[0] + 6, -10],
  [detectedPosition[0] + 2, detectedPosition[0] - 2, -10],
  [detectedPosition[0] - 2, detectedPosition[0] - 2, -10],
  [detectedPosition[0] + 3, detectedPosition[0] + 4.5, -10],
  [detectedPosition[0] + 3, detectedPosition[0] - 4.5, -10],
  [detectedPosition[0] - 3, detectedPosition[0] - 4.5, -10],
  [detectedPosition[0] - 3, detectedPosition[0] + 7, -10],
  [detectedPosition[0] - 0, detectedPosition[0] - 4, -10],
  [detectedPosition[0] + 3, detectedPosition[0] + 7, -10],
  [detectedPosition[0] - 3, detectedPosition[0] - 0.5, -10],
  [detectedPosition[0] + 3, detectedPosition[0] + 0, -10],
  [detectedPosition[0], detectedPosition[0] + 8, -10],
];
const TechInfo = ({onPressCategory, onPressTechnologyLogo}) => {
  const [technologyArray, setTechnologyArray] = useState(staticTechnologyArray);

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

  function getRandomInt(min = -2, max = 5) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const indexPosition = value => {
    return positions[value];
  };

  ViroMaterials.createMaterials({
    line: {
      normalTexture: require('./line.jpg'),
    },
    technologyBG: {
      normalTexture: require('./technologyBG.png'),
      diffuseTexture: require('./technologyBG.png'),
      rotateY: '+=90',
    },
  });

  return (
    <ViroARScene>
      {/* {technologyArray?.map((item, index) => ( */}
      <>
        <ViroFlexView
          width={2}
          height={2}
          radius={1.5}
          position={[0, 0, -10]}
          key={`View${0}`}
          opacity={1}
          // materials="technologyBG"
          backgroundColor="#FFF"
          style={{
            radius: 0.5,
            opacity: 0,
            borderRadius: 5,
            backgroundColor: '#FFF',
          }}
          // onPress={() => (showSelectedTechnologyRef.current = item?.title)}
          // animation={{
          //   name: `animationAndshow${0}`,
          //   loop: true,
          //   run: true,
          // }}
        >
          <ViroText
            text="React native"
            textAlign="center"
            key={`Text${0}`}
            textAlignVertical="center"
            textLineBreakMode="justify"
            textClipMode="clipToBounds"
            color="#FFF"
            width={1.5}
            height={0.5}
          />
        </ViroFlexView>
      </>
      {/* ))} */}
    </ViroARScene>
  );
};

export default TechInfo;

const styles = StyleSheet.create({});
