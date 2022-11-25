import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  ViroAmbientLight,
  ViroAnimations,
  ViroARImageMarker,
  ViroARScene,
  ViroARTrackingTargets,
  ViroImage,
} from '@viro-community/react-viro';
import RenderBubbleCategory from './RenderBubbleCategory';
import RenderTechnologies from './RenderTechnologies';
import TechInfo from './TechInfo';
const DetectCompany = ({
  setShowTechnologies,
  showTechnologies,
  setShowCategories,
  showCategories,
  showCategoriesRef,
  showTechnologiesRef,
  showSelectedTechnologyRef,
  setUpdated,
  updated,
}) => {
  const [anchor, setAnchor] = useState(false);
  const [position, setPosition] = useState([0, 0, -5]);
  const [positionUpdated, setPositionUpdated] = useState(false);

  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateZ: '+=90',
      },
    },
  });

  ViroARTrackingTargets.createTargets({
    excellarate: {
      source: require('./logo.jpg'),
      orientation: 'Up',
      physicalWidth: 0.7,
    },
  });

  const anchorFound = props => {
    console.log('anchorFound', props);
    setAnchor(true);
  };

  const onAnchorFound = props => {
    if (!positionUpdated) {
      const dummy = [
        props.position[0] + props.position[0],
        props.position[1] + props.position[1],
        -5,
      ];
      setPositionUpdated(true);
      setPosition(dummy);
      setTimeout(() => onPressLogo(), 200);
    }
  };

  const onPressLogo = () => {
    showCategoriesRef.current = true;
    setShowCategories(true);
    setUpdated(!updated);
  };

  const onPressCategory = value => {
    setShowTechnologies(true);
    showTechnologiesRef.current = value;
    setAnchor(false);
    setUpdated(!updated);
  };

  const onPressTechnologyLogo = () => {
    setShowTechnologies(false);
    showTechnologiesRef.current = '';
    setUpdated(!updated);
  };

  const onPressTechnology = value => {
    showSelectedTechnologyRef.current = value;
    setUpdated(value);
  };

  const renderScreen = () => {
    if (showSelectedTechnologyRef.current) {
      return (
        <TechInfo
          position={position}
          onPressTechnologyLogo={onPressTechnologyLogo}
          onPressTechnology={onPressTechnology}
          selectedTech={showSelectedTechnologyRef?.current}
        />
      );
    } else if (showTechnologiesRef.current) {
      return (
        <RenderTechnologies
          position={position}
          onPressTechnologyLogo={onPressTechnologyLogo}
          onPressTechnology={onPressTechnology}
          selectedTech={showTechnologiesRef.current}
        />
      );
    } else if (showCategoriesRef.current) {
      return (
        <RenderBubbleCategory
          onPressCategory={onPressCategory}
          position={position}
        />
      );
    } else {
      return (
        <ViroARScene>
          <ViroARImageMarker
            target="excellarate"
            onAnchorFound={anchorFound}
            onAnchorUpdated={onAnchorFound}
            pauseUpdates={true}
          />
          <ViroAmbientLight color="#FFF" />
          {anchor && (
            <ViroImage
              source={require('./excellarate.png')}
              position={position}
              onClick={onPressLogo}
            />
          )}
        </ViroARScene>
      );
    }
  };
  return <>{renderScreen()}</>;
};

export default DetectCompany;

const styles = StyleSheet.create({});
