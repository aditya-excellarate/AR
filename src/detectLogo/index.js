import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ViroARSceneNavigator} from '@viro-community/react-viro';
import DetectCompany from './DetectCompany';
import {useRef} from 'react';
import {useState} from 'react';

const DetectLogo = ({navigation}) => {
  const showCategoriesRef = useRef(null);
  const showTechnologiesRef = useRef(null);
  const showSelectedTechnologyRef = useRef(null);
  const [showCategories, setShowCategories] = useState(false);
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [selectedTech, setSelectedTech] = useState('');
  console.log('navigation', navigation);
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        console.log(
          'called',
          showSelectedTechnologyRef,
          showTechnologiesRef,
          showCategoriesRef,
        );
        e.preventDefault();
        if (showSelectedTechnologyRef.current) {
          setSelectedTech(false);
          showSelectedTechnologyRef.current = '';
          return null;
        }
        if (showTechnologiesRef.current) {
          setShowTechnologies(false);
          showTechnologiesRef.current = false;
          return null;
        }
        if (showCategoriesRef.current) {
          setShowCategories(false);
          showCategoriesRef.current = false;
          return null;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();
        console.log('returned');
        navigation.dispatch(e.data.action);
      }),
    [navigation, showTechnologiesRef.current, showCategoriesRef.current],
  );
  console.log('show', showTechnologiesRef);
  const renderItem = () => {
    return (
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: DetectCompany,
          passProps: {
            showCategoriesRef,
            showTechnologiesRef,
            showSelectedTechnologyRef,
            showCategories,
            setShowCategories,
            showTechnologies,
            setShowTechnologies,
          },
        }}
        style={{flex: 1}}
      />
    );
  };
  return <View style={styles.mainView}>{renderItem()}</View>;
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
