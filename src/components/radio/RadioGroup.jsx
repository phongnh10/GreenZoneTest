import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioButton from './RadioButton';
import GLOBAL_KEYS from '../../constants/global_keys';
import colors from '../../constants/color';


const RadioGroup = ({
  items,
  selectedValue,
  onValueChange,
  title,
  required = false, // Bắt buộc chọn hay không
  note
}) => {
  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      {title && (
        <Text style={styles.title}>
          {title}
          {required && <Text style={styles.redText}>*</Text>}
          {note && <Text style={styles.note}> ({note})</Text>}
        </Text>
      )}

      {/* Danh sách Radio Buttons */}
      {items.map((item) => {
        const { id, name, price } = item;

        return (
          <RadioButton
            key={id}
            label={name}
            selected={selectedValue === id}
            onPress={() => onValueChange(id)}
            price={price}
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




export default RadioGroup;

