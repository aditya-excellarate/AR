import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  ViroAnimations,
  ViroARScene,
  ViroFlexView,
  ViroImage,
  ViroMaterials,
  ViroText,
} from '@viro-community/react-viro';
import {useState} from 'react';
const detectedPosition = [0, 0, 0];
const dummyTechnologyArray = {
  FE: [
    {
      title: 'React',
      key: 'React',
      image: require('./logos/react.png'),
    },
    {
      title: 'React Native',
      key: 'React_native',
      image: require('./logos/react.png'),
    },
    {
      title: 'Angular',
      key: 'Angular',
      image: require('./logos/angular.png'),
    },
    {
      title: 'Vue',
      key: 'Vue',
      image: require('./logos/vue.png'),
    },
    {
      title: 'HTML',
      key: 'HTML',
    },
    {
      title: 'CSS',
      key: 'CSS',
    },
    {
      title: 'Javascript',
      key: 'Javascript',
      image: require('./logos/js.png'),
    },
    {
      title: 'Flutter',
      key: 'Flutter ',
      image: require('./logos/flutter.png'),
    },
    {
      title: 'Swift',
      key: 'Swift',
      image: require('./logos/swift.png'),
    },
    {
      title: 'Kotlin',
      key: 'Kotlin',
      image: require('./logos/kotlin.png'),
    },
    {
      title: 'Redux',
      key: 'Redux',
      image: require('./logos/redux.png'),
    },

    {
      title: 'Web3.0',
      key: 'Web3.0',
      // image: require('./logos/node.png'),
    },
    {
      title: 'Bootstrap',
      key: 'Bootstrap',
      image: require('./logos/bootstrap.png'),
    },
    {
      title: 'WordPress',
      key: 'WordPress',
      image: require('./logos/wordpress.png'),
    },
    {
      title: 'ARKIT',
      key: 'ARKIT',
    },
    {
      title: 'PWA',
      key: 'PWA',
      image: require('./logos/pwa.png'),
    },
    {
      title: 'Tableau',
      key: 'Tableau',
      image: require('./logos/tableau.png'),
    },
  ],
  BE: [
    {
      title: 'Node',
      key: 'Node',
      image: require('./logos/node.png'),
    },
    {
      title: 'Php',
      key: 'Php',
      image: require('./logos/php.png'),
    },
    {
      title: 'AWS',
      key: 'AWS',
      image: require('./logos/Aws.png'),
    },
    {
      title: 'AWS Lambda',
      key: 'AWS_Lambda',
      image: require('./logos/lambda.png'),
    },
    {
      title: 'Azure',
      key: 'Azure',
      image: require('./logos/azure.png'),
    },
    {
      title: 'docker',
      key: 'docker',
      image: require('./logos/docker.png'),
    },
    {
      title: 'hyperledger blockchain',
      key: 'hperledger_blockchain',
      image: require('./logos/node.png'),
    },
  ],
  QA: [
    {
      title: 'Jenkins',
      key: 'Jenkins',
      image: require('./logos/jenkins.png'),
    },
    {
      title: 'Selenium',
      key: 'Selenium',
      image: require('./logos/selenium .png'),
    },
    {
      title: 'Cucumber',
      key: 'Cucumber',
    },
  ],
};

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
  [detectedPosition[0] + 5, detectedPosition[0] + 8, -10],
];

const RenderTechnologies = ({
  onPressTechnologyLogo,
  selectedTech,
  onPressTechnology,
}) => {
  const [technologyArray, setTechnologyArray] = useState(
    dummyTechnologyArray['FE'],
  );
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
      {technologyArray?.map((item, index) => {
        const IP = indexPosition(index);
        return (
          <>
            {!!item?.image && (
              <ViroImage
                source={item?.image}
                position={[IP[0] - 1.2, IP[1] + 0.1, IP[2]]}
                key={`Image`}
                width={0.5}
                height={0.5}
                // animation={{name: 'animation1', loop: true, run: true}}
              />
            )}
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
              onClick={() => onPressTechnology(item?.key)}
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
                onClick={() => onPressTechnology(item?.key)}
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
        );
      })}

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
