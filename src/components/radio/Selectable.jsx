import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import colors from '../../constants/color';
import GLOBAL_KEYS from '../../constants/global_keys';
import Feather from 'react-native-vector-icons/Feather';

const Selectable = ({
  item,
  quantity,
  selected,
  handlePlus,
  handleMinus,

}) => {

  const activeColor = selected ? colors.primary : colors.gray400;
  const textColor = selected ? colors.primary : colors.black;


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {!selected ? (
          < QuantityButton
            iconName='plus'
            onPress={() => { handlePlus(item) }}
            activeColor={activeColor} />
        )
          : (
            <View style={styles.row}>
              <QuantityButton
                iconName='minus'
                onPress={() => handleMinus(item)}
                activeColor={activeColor}
              />
              <Text style={[styles.quantityText, { color: activeColor }]}>
                {quantity}
              </Text>
              <QuantityButton
                iconName='plus'
                onPress={() => handlePlus(item)}
                activeColor={activeColor}
              />
            </View>
          )}
        <Text style={[styles.label, { color: textColor }]}>{item.name}</Text>
      </View>

      {item.price && (
        <Text style={[styles.price, { color: textColor }]}>{item.price}</Text>
      )}
    </View>
  );
};

const QuantityButton = ({ iconName, onPress, activeColor }) => (
  <Pressable onPress={onPress}>
    <View style={[styles.circleWrapper, { borderColor: activeColor }]}>
      <Feather name={iconName} color={activeColor} size={18} />
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: GLOBAL_KEYS.PADDING_SMALL,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleWrapper: {
    width: GLOBAL_KEYS.ICON_SIZE_DEFAULT,
    height: GLOBAL_KEYS.ICON_SIZE_DEFAULT,
    borderRadius: GLOBAL_KEYS.ICON_SIZE_DEFAULT / 2,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray400,
  },
  label: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
    marginLeft: GLOBAL_KEYS.PADDING_SMALL,
  },
  price: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
  },
  quantityText: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
    marginHorizontal: GLOBAL_KEYS.PADDING_SMALL,
  },
});

export default Selectable;
