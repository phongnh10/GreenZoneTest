import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../constants/color';
import GLOBAL_KEYS from '../../constants/globalKeys';
import QuantityButton from './QuantityButton';
import PropTypes from 'prop-types'


const QuantitySelectorPropTypes = {

}
const QuantitySelector = ({
  quantity,
  iconColor = colors.primary,
  textColor = colors.black,
  handlePlus,
  handleMinus,
 
}) => {
  return (
    <View style={styles.row}>
      <QuantityButton
        iconName="minus"
        onPress={handleMinus}
        iconColor={iconColor}
      />
      <Text style={[styles.quantityText, { color: colors.textColor }]}>{quantity}</Text>
      <QuantityButton
        iconName="plus"
        onPress={handlePlus}
        iconColor={iconColor}
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
