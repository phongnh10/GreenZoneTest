import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';
import colors from '../constants/color';
import GLOBAL_KEYS from '../constants/global_keys';

const RadioGroup = ({
  data,
  selectedValue,
  onChange,
  labelExtractor,
  valueExtractor,
  additionalInfoExtractor,
}) => {
  return (
    <View style={styles.container}>
      <RadioButton.Group onValueChange={onChange} value={selectedValue}>
        {data.map(item => {
          const value = valueExtractor(item);
          const label = labelExtractor(item);
          const additionalInfo = additionalInfoExtractor ? additionalInfoExtractor(item) : null;

          return (
            <View
              key={value}
              onValueChange={() => onChange(value)}
              style={[
                styles.radioItem,
                selectedValue === value && styles.radioItemElevated,
              ]}
            >
              <View style={styles.radioButtonContainer}>
                <RadioButton
                  value={value}
                  status={selectedValue === value ? 'checked' : 'unchecked'}
                  onPress={() => onChange(value)}
                  color={selectedValue === value ? colors.primary : colors.gray400}
                />
                <Text style={styles.label}>{label}</Text>
              </View>
              {additionalInfo !== null && <Text style={styles.price}>${additionalInfo}</Text>}
            </View>
          );
        })}
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    marginBottom: 4,
    // marginHorizontal: 8,
    paddingVertical: 8


  },
  radioItemElevated: {
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: colors.green100,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,

  },
  label: {
    color: 'black',
    fontSize: 16,
  },
  price: {
    color: 'black',
    fontSize: 16,
    marginRight: 16,
  },
});

export default RadioGroup;
