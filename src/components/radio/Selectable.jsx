import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../constants/color';
import GLOBAL_KEYS from '../../constants/globalKeys';
import QuantityButton from '../buttons/QuantityButton';
import QuantitySelector from '../buttons/QuantitySelector';

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
            <QuantitySelector
              quantity={quantity}
              activeColor={activeColor}
              handlePlus={() => handlePlus(item)}
              handleMinus={() => handleMinus(item)}
            />
          )}
        <Text style={[styles.label, { color: textColor }]}>{item.name}</Text>
      </View>

      {item.price && (
        <Text style={[styles.price, { color: textColor }]}>{item.price}</Text>
      )}
    </View>
  );
};

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
