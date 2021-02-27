import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {
  const {name, tagLine, tagLineCTA, image} = props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.mainTitle}> {name}</Text>
        <Text style={styles.subTitle}>
          {tagLine} <Text style={styles.subTitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type={'primary'}
          text={'Custom Order'}
          onPress={() => {
            console.warn('custom order pressed');
          }}
        />

        <StyledButton
          type={'secondary'}
          text={'Existing Inventory'}
          onPress={() => {
            console.warn('inventory order pressed');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
