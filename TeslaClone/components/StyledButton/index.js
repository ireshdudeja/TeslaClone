import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
    const {type, text, onPress} = props;
    
    const bgColor = type === 'primary' ? '#171A20CC': '#FFFFFF';
    const tColor = type === 'primary' ? '#FFFFFF': '#171A20CC';


    return (<View style={styles.container}>
        <Pressable
        style={{...styles.button, backgroundColor: bgColor}}
        onPress={onPress}>
        <Text style={[styles.text, {color: tColor}]}>{text}</Text>
        </Pressable>
    </View>);
}

export default StyledButton;