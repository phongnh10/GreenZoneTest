import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Badge } from 'react-native-paper';

const IconWithBadge = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.button}>
                <Feather name="bell" style={styles.icon} />
            </View>
            <Badge style={styles.badge}>13</Badge>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 44,
        height: 44,
        position: 'relative',
        justifyContent: 'center',
    },
    button: {
        width: 34,
        height: 34,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    icon: {
        fontSize: 24,
        color: 'green',
    },
    badge: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'red',
        color: 'white',
        lineHeight: 16,
    },
});

export default IconWithBadge;
