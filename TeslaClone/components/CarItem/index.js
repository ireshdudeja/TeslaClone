import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
          <ImageBackground
            source={require('../../assets/images/ModelS.jpeg')}
            style={styles.image}
          />
          <View style={styles.titles}>
            <Text style={styles.mainTitle}> Model S</Text>
            <Text style={styles.subTitle}> Starting at $69,420</Text>
          </View>
          <StyledButton type={'primary'} text={'Custom Order'} 
          onPress={()=>{console.warn('custom order pressed')}}/>
          <StyledButton type={'secondary'} text={'Existing Inventory'}
              onPress={()=>{console.warn('inventory order pressed')}}
          />
        </View>
    )
}

export default CarItem;