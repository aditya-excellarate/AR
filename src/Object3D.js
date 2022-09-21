import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Viro360Video,
  Viro3DObject,
  ViroAmbientLight,
  ViroARPlane,
  ViroARPlaneSelector,
  ViroARScene,
  ViroARSceneNavigator,
  ViroBox,
} from '@viro-community/react-viro';

const Object3D = () => {
  const [position, setPosition] = useState([0, 0, -10]);
  const [paused, setPaused] = useState(false);
  const handleLoadStart = () => {
    console.log('OBJ loading has started');
  };
  const handleLoadEnd = () => {
    console.log('OBJ loading has finished');
  };
  const handleError = event => {
    console.log('OBJ loading failed with error: ' + event.nativeEvent.error);
  };
  const _onClick = source => {
    console.log('We just Clicked the image!');
  };

  const _onClickState = (state, source) => {
    console.log('StateValue', state, 'source', source);
    const stateValue = state;
    if (stateValue == 1) {
      console.log('User has click-down on the image!');
    } else if (stateValue == 2) {
      console.log('User has click-up on the image!');
    } else if (stateValue == 3) {
      console.log('User has finally clicked on the image!');
    }
  };

  const _onDrag = (draggedToPosition, source) => {
    console.log(
      'Source',
      source,
      'Dragged to: x' +
        draggedToPosition +
        '1' +
        draggedToPosition[0] +
        ' y:' +
        draggedToPosition[1] +
        ' z: ' +
        draggedToPosition[2],
    );
    setPosition(draggedToPosition);
  };

  const _onHoverDoSomething = (isHovering, source) => {
    if (isHovering) {
      console.log('We are hovering onto the image!');
    } else {
      console.log('We are not longer hovering on the image!');
    }
  };

  const _onScroll = (scrollPosition, source) => {
    console.log(
      'Scrolled to: x' + scrollPosition[0] + ' y:' + scrollPosition[1],
    );
  };

  const _onSwipe = (swipeState, source) => {
    if (swipeState == 1) {
      console.log('Swiped up');
    } else if (swipeState == 2) {
      console.log('Swiped down');
    } else if (swipeState == 3) {
      console.log('Swiped left');
    } else if (swipeState == 4) {
      console.log('Swiped right');
    }
  };

  const _onTouch = (state, touchPos, source) => {
    var touchX = touchPos[0];
    var touchY = touchPos[1];
    if (state == 1) {
      // Touch Down
    } else if (state == 2) {
      // Touch Down Move
    } else if (state == 3) {
      // Touch Up
    }
  };
  const onPlaneSelected = anchor => {
    setPaused(true);
  };

  const _onFuse = source => {
    // User has hovered over object for timeToFuse milliseconds
  };
  const renderAR = () => {
    return (
      <ViroARScene
      // onAnchorFound={foundAnchor => console.log('onAnchorFound', foundAnchor)}
      // onAnchorUpdated={() => console.log('onAnchorUpdated')}
      // onAnchorRemoved={() => console.log('onAnchorRemoved')}
      >
        {/* <ViroARPlane minHeight={0.1} minWidth={0.1} alignment={'Horizontal'}> */}
        {/* <ViroARPlaneSelector
          minHeight={0.5}
          minWidth={0.5}
          pauseUpdates={paused}
          onPlaneSelected={onPlaneSelected}> */}
        <Viro3DObject
          source={require('../res/icecreamman_anim/icecreamman_anim_pbr.vrx')}
          resources={[
            require('../res/icecreamman_anim/icecream_man_pbr_Base_Color.png'),
            require('../res/icecreamman_anim/icecream_man_pbr_Metallic.png'),
            require('../res/icecreamman_anim/icecream_man_pbr_Normal_OpenGL.png'),
            require('../res/icecreamman_anim/icecream_man_pbr_Roughness.png'),
          ]}
          animation={{name: '02', delay: 0, loop: true, run: true}}
          dragType="FixedToWorld"
          type="VRX"
          position={position}
          scale={[1, 1, 1]}
          // onLoadStart={handleLoadStart}
          // onLoadEnd={handleLoadEnd}
          // onError={handleError}
          // onClick={_onClick}
          // onClickState={_onClickState}
          // onDrag={_onDrag}
          // onHover={_onHoverDoSomething}
          // onScroll={_onScroll}
          // onSwipe={_onSwipe}
          // onTouch={_onTouch}
          // onPinch={data => console.log('pinch', data)}
          // onFuse={{callback: _onFuse, timeToFuse: 3000}}
        />
        {/* </ViroARPlane> */}
        {/* </ViroARPlaneSelector> */}
        <ViroAmbientLight color="#FFFFFF" />
      </ViroARScene>
    );
  };
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: renderAR,
      }}
      style={styles.f1}
    />
  );
};

export default Object3D;

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
