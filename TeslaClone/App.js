/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import CarItem from './components/CarItem';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View>
        <CarItem
          name={'Model S'}
          tagLine={'Order Online for'}
          tagLineCTA={'Touchless Delivery'}
          image={require('./assets/images/ModelS.jpeg')}
        />

        {/* <CarItem
          name={'Model 3'}
          tagLine={'Order Online for Touchless Delivery'}
          image={require('./assets/images/Model3.jpeg')}
        />

        <CarItem
          name={'Model X'}
          tagLine={'Order Online for Touchless Delivery'}
          image={require('./assets/images/ModelX.jpeg')}
        />

        <CarItem
          name={'Model Y'}
          tagLine={'Order Online for Touchless Delivery'}
          image={require('./assets/images/ModelY.jpeg')}
        /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
