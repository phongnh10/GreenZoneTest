import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Badge } from 'react-native-paper';
import colors from '../../constants/color';
import GLOBAL_KEYS from '../../constants/global_keys';

const IconWithBadge = (props) => {
    const {
        quantity = 10,
        onPress
    } = props
    return (
        <Pressable
            onPress={onPress}
            style={styles.container}>
            <View style={styles.button}>
                <Feather name="bell" style={styles.icon} />
            </View>
            {
                (quantity < GLOBAL_KEYS.MAX_QUANTITY
                    && quantity > GLOBAL_KEYS.MIN_QUANTITY) ?
                    <Badge style={styles.badge}>{quantity}</Badge>
                    :
                    <Badge style={styles.badge}>00</Badge>
            }


        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    button: {
        padding: 8, 
        borderRadius: 20,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    icon: {
        fontSize: GLOBAL_KEYS.ICON_SIZE_DEFAULT,
        color: colors.primary,
    },
    badge: {
        position: 'absolute',
        top: 4, 
        right: 4,
        backgroundColor: colors.red800,
        color: colors.white,
    },
});


export default IconWithBadge;