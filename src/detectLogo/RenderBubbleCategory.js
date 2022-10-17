import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  ViroAnimations,
  ViroARScene,
  ViroARTrackingTargets,
  ViroFlexView,
  ViroImage,
  ViroMaterials,
  ViroText,
} from '@viro-community/react-viro';

const RenderCategories = ({onPressCategory, position}) => {
  const [animationDone, setAnimationDone] = useState(false);
  ViroMaterials.createMaterials({
    line: {
      normalTexture: require('./line.jpg'),
    },
    bubble: {
      normalTexture: require('./bubble.png'),
      diffuseTexture: require('./bubble.png'),
      animation: {
        name: animationDone ? 'reverse' : 'forward',
        loop: false,
        run: true,
        onFinish: () => setAnimationDone(!animationDone),
      },
      rotateY: '+=90',
    },
  });

  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {},
    },
    forward: {
      delay: 2500,
      duration: 2500,
      properties: {
        opacity: 1,
        scaleX: '+=0.2',
        scaleY: '+=0.2',
        scaleZ: '+=0.2',
      },
    },
    reverse: {
      delay: 2500,
      duration: 2500,
      properties: {
        opacity: 1,
        scaleX: '-=0.2',
        scaleY: '-=0.2',
        scaleZ: '-=0.2',
      },
    },
    logoPosition: {
      duration: 2500,
      delay: 200,
      properties: {
        scaleX: '0.6',
        scaleY: '0.6',
        scaleZ: '0.6',
      },
    },
    forward_reverse: ['forward', 'reverse'],
  });

  ViroARTrackingTargets.createTargets({
    skullImage: {
      source: require('./logo.jpg'),
      orientation: 'Up',
      physicalWidth: 0.165,
    },
  });
  return (
    <ViroARScene
      onCollision={collision => console.log('onCollision', collision)}>
      <ViroFlexView
        width={1.5}
        height={1.5}
        position={[0, 2.5, -8]}
        rotation={[0, 0, 0]}
        opacity={0}
        materials="bubble"
        animation={{
          name: animationDone ? 'reverse' : 'forward',
          loop: false,
          run: true,
          onFinish: () => setAnimationDone(!animationDone),
        }}
        onDrag={props => console.log('props', props)}
        onCollision={collision => console.log('onCollision', collision)}
        onClick={() => onPressCategory('BE')}>
        <ViroText
          text="BE"
          textAlign="center"
          textAlignVertical="center"
          textLineBreakMode="justify"
          textClipMode="clipToBounds"
          color="#FFF"
          style={{
            backgroundColor: 'red',
            marginLeft: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            marginRight: 'auto',
            fontWeight: '800',
          }}
          width={1.5}
          height={0.5}
        />
      </ViroFlexView>
      <ViroFlexView
        width={1.5}
        height={1.5}
        position={[2.5, 0, -8]}
        rotation={[0, 0, 0]}
        opacity={0}
        onCollision={collision => console.log('onCollision', collision)}
        onClick={() => onPressCategory('FE')}
        materials="bubble"
        animation={{
          name: !animationDone ? 'reverse' : 'forward',
          loop: false,
          run: true,
        }}
        onDrag={props => console.log('props', props)}>
        <ViroText
          text="QA"
          textAlign="center"
          textAlignVertical="center"
          textLineBreakMode="justify"
          textClipMode="clipToBounds"
          width={1.5}
          height={0.5}
          color="#FFF"
          style={{
            backgroundColor: 'red',
            marginLeft: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            marginRight: 'auto',
            fontWeight: '800',
          }}
        />
      </ViroFlexView>
      <ViroFlexView
        width={1.5}
        height={1.5}
        position={[-2.5, 0, -8]}
        rotation={[0, 0, 0]}
        opacity={0}
        onCollision={collision => console.log('onCollision', collision)}
        onClick={() => onPressCategory('QA')}
        materials="bubble"
        animation={{
          name: !animationDone ? 'reverse' : 'forward',
          loop: false,
          run: true,
        }}
        onDrag={props => console.log('props', props)}>
        <ViroText
          text="FE"
          textAlign="center"
          textAlignVertical="center"
          textLineBreakMode="justify"
          textClipMode="clipToBounds"
          width={1.5}
          height={0.5}
          color="#FFF"
          style={{
            backgroundColor: 'red',
            marginLeft: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            marginRight: 'auto',
            fontWeight: '800',
          }}
        />
      </ViroFlexView>

      <ViroImage
        width={1.0}
        height={1.0}
        source={require('./excellarate.png')}
        position={[0, 0, -5]}
        onClick={onPressCategory}
        rotation={[0, 0, 0]}
        // scale={[0.8, 0.8, 0.8]}
        animation={{name: 'logoPosition', loop: true, run: true}}
      />
    </ViroARScene>
  );
};

export default RenderCategories;

const styles = StyleSheet.create({});
