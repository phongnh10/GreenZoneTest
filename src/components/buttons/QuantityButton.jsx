import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import colors from '../../constants/color';
import GLOBAL_KEYS from '../../constants/globalKeys';
import Feather from 'react-native-vector-icons/Feather';

const QuantityButton = ({ iconName, onPress, activeColor }) => (
    <Pressable onPress={onPress}>
        <View style={[styles.circleWrapper, { borderColor: activeColor }]}>
            <Feather name={iconName} color={activeColor} size={18} />
        </View>
    </Pressable>
);

const styles = StyleSheet.create({
    circleWrapper: {
        width: GLOBAL_KEYS.ICON_SIZE_DEFAULT,
        height: GLOBAL_KEYS.ICON_SIZE_DEFAULT,
        borderRadius: GLOBAL_KEYS.ICON_SIZE_DEFAULT / 2,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.gray400,
    }
});
export default QuantityButton