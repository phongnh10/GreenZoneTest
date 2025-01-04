import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar, Dimensions } from 'react-native';
import colors from '../../constants/color';
import GLOBAL_KEYS from '../../constants/global_keys';
import Feather from 'react-native-vector-icons/Feather';

const Selectable = ({
  item,
  initialQuantity = 0,
  selected,
  addToGroup,
  removeFromGroup
}) => {


  const [quantity, setQuantity] = useState(initialQuantity);
  const activeColor = selected ? colors.primary : colors.gray400;
  const textColor = selected ? colors.primary : colors.black;

  const handlePressPlus = () => {
    addToGroup(item)
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handlePressMinus = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    } else {
      removeFromGroup(item)
      setQuantity(0);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {!selected ? (
          QuantityButton('plus', handlePressPlus, activeColor, activeColor)
        ) : (
          <View style={styles.row}>
            {QuantityButton('minus', handlePressMinus, activeColor, activeColor)}
            <Text style={[styles.quantityText, { color: textColor }]}>{quantity}</Text>
            {QuantityButton('plus', handlePressPlus, activeColor, activeColor)}
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

const QuantityButton = (iconName, onPress, borderColor, iconColor) => (
  <Pressable onPress={onPress}>
    <View style={[styles.circleWrapper, { borderColor }]}>
      <Feather name={iconName} color={iconColor} size={18} />
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
