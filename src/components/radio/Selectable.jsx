import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar, Dimensions } from 'react-native';
import colors from '../../constants/color';
import GLOBAL_KEYS from '../../constants/global_keys';
import Feather from 'react-native-vector-icons/Feather';

const Selectable = ({
  label,
  initialQuantity = 0,
  selected,
  additionalInfo,
  onPressPlus = () => { },
  key
}) => {
  console.log(Dimensions.get('window').width)
  const [isSelected, setIsSelected] = useState(false);
  const [quantity, setQuantity] = useState(initialQuantity);
  const activeColor = isSelected ? colors.primary : colors.gray400;
  const textColor = isSelected ? colors.primary : colors.black;

  const handlePressPlus = () => {
    setIsSelected(true);
    setQuantity(prevQuantity => prevQuantity + 1);
    onPressPlus();
  };

  const handlePressMinus = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    } else {
      setIsSelected(false);
      setQuantity(0);
    }
  };

  return (
    <View key={key} style={styles.container}>
      <View style={styles.row}>
        {!isSelected ? (
          QuantityButton('plus', handlePressPlus, activeColor, activeColor)
        ) : (
          <View style={styles.row}>
            {QuantityButton('minus', handlePressMinus, activeColor, activeColor)}
            <Text style={[styles.quantityText, { color: textColor }]}>{quantity}</Text>
            {QuantityButton('plus', handlePressPlus, activeColor, activeColor)}
          </View>
        )}
        <Text style={[styles.label, { color: textColor }]}>{label}</Text>
      </View>

      {additionalInfo && (
        <Text style={[styles.additionalInfo, { color: textColor }]}>{additionalInfo}</Text>
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
  additionalInfo: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
  },
  quantityText: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
    marginHorizontal: GLOBAL_KEYS.PADDING_SMALL,
  },
});

export default Selectable;
