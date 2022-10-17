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
const RenderTechnologies = ({onPressCategory, onPressTechnologyLogo}) => {
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
    // const position = -value;
    // const z = value + 2;
    // if (value % 2 === 0) {
    //   const x = -value;
    //   return [getRandomInt(-7, 7), getRandomInt(-7, 7), -10];
    // }
    // if (value % 3 === 0) {
    //   const x = value + 2;
    //   return [getRandomInt(1, 5), getRandomInt(1, 5), -10];
    // }
    // return [getRandomInt(-3, -1), getRandomInt(-3, -1), -10];
  };

  ViroMaterials.createMaterials({
    line: {
      normalTexture: require('./line.jpg'),
    },
    technologyBG: {
      normalTexture: require('./technologyBG.png'),
      diffuseTexture: require('./technologyBG.png'),
      // animation: {
      //   name: animationDone ? 'reverse' : 'forward',
      //   loop: false,
      //   run: true,
      //   onFinish: () => setAnimationDone(!animationDone),
      // },
      rotateY: '+=90',
    },
  });

  return (
    <ViroARScene>
      {technologyArray?.map((item, index) => (
        <>
          <ViroFlexView
            width={1.5}
            height={0.7}
            radius={1.5}
            position={indexPosition(index)}
            rotation={[0, 0, 0]}
            key={`View${index}`}
            opacity={0.5}
            materials="technologyBG"
            borderColor="#000"
            style={{radius: 0.5, opacity: 0, borderRadius: 5}}
            onPress={() => (showSelectedTechnologyRef.current = item?.title)}
            animation={{
              name: `animationAndshow${index}`,
              loop: true,
              run: true,
            }}>
            <ViroText
              text={item?.title}
              textAlign="center"
              key={`Text${index}`}
              textAlignVertical="center"
              textLineBreakMode="justify"
              textClipMode="clipToBounds"
              color="#000"
              width={1.5}
              height={0.5}
            />
          </ViroFlexView>

          {/* <ViroPolyline
            position={[0, -0.1, -10]}
            points={[
              [0, 1, 0],
              [0, -index, 0],
              [index % 2 === 0 ? -0.2 : 0.2, -index, 0],
            ]}  
            thickness={0.05}
            materials={'line'}
            opacity={0}
            animation={{
              name: `animationAndshow${index}`,
              loop: true,
              run: true,
            }}
          /> */}
        </>
      ))}
      <ViroImage
        source={require('./excellarate.png')}
        position={[0, 1, -5]}
        key={`Image`}
        // animation={{name: 'animation1', loop: true, run: true}}
        onClick={onPressTechnologyLogo}
      />
    </ViroARScene>
  );
};

export default RenderTechnologies;

const styles = StyleSheet.create({});
