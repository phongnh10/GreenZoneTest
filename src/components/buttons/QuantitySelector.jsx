import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../constants/color';
import GLOBAL_KEYS from '../../constants/globalKeys';
import QuantityButton from './QuantityButton';

const QuantitySelector = ({ quantity, activeColor, handlePlus, handleMinus }) => {
  return (
    <View style={styles.row}>
      <QuantityButton
        iconName="minus"
        onPress={handleMinus}
        activeColor={activeColor}
      />
      <Text style={[styles.quantityText, { color: colors.black }]}>{quantity}</Text>
      <QuantityButton
        iconName="plus"
        onPress={handlePlus}
        activeColor={activeColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
    marginHorizontal: GLOBAL_KEYS.PADDING_SMALL,
  },
});

export default QuantitySelector;
