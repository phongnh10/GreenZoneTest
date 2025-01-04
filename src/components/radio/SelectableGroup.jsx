import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GLOBAL_KEYS from '../../constants/global_keys';
import colors from '../../constants/color';
import Selectable from './Selectable';



const SelectableGroup = ({
    items,
    title = "Default title",
    group = [],
    addToGroup,
    removeFromGroup,
    required = false,
    note,
}) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                {title}
                {required && <Text style={styles.redText}>*</Text>}
                {note && <Text style={styles.note}> ({note})</Text>}
            </Text>
            {items.map(item => {


                return (
                    <Selectable
                        item={item}
                        selected={group.includes(item)}
                        addToGroup={addToGroup}
                        removeFromGroup={removeFromGroup}
                        key={item.id}

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

