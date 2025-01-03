import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GLOBAL_KEYS from '../../constants/global_keys';
import colors from '../../constants/color';
import Selectable from './Selectable';



const SelectableGroup = ({
    title = "Default title",
    required = false,
    note,
    items,
}) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                {title}
                {required && <Text style={styles.redText}>*</Text>}
                {note && <Text style={styles.note}> ({note})</Text>}
            </Text>
            {items.map((item, index) => {
                const { label, quantity, additionalInfo } = item;
                return (
                    <Selectable
                        additionalInfo={additionalInfo}
                        quantity={quantity}
                        label={label}
                        key={index}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: GLOBAL_KEYS.PADDING_DEFAULT
    },
    title: {
        fontSize: GLOBAL_KEYS.TEXT_SIZE_HEADER,
        fontWeight: 'bold',
        marginBottom: GLOBAL_KEYS.PADDING_SMALL,
    },
    redText: {
        color: colors.red800,
    },
    note: {
        fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
        fontWeight: '400',
    }
});


export default SelectableGroup;

