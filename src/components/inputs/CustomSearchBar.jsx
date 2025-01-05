import React from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
// Sử dụng vector icon
import colors from '../../constants/color';
import { Icon } from 'react-native-paper';

const CustomSearchBar = ({
  placeholder = "Search",
  searchQuery,
  setSearchQuery,
  onClearIconPress,
  style = {},
  leftIcon = "magnify",
  rightIcon = "close",
  rightIconColor = colors.primary,
  onLeftIconPress = () => { },
}) => {
  return (
    <View style={[styles.container, style]}>
      {/* Left Icon */}
      <Pressable onPress={onLeftIconPress}>
        <Icon source={leftIcon} size={24} color={colors.primary} />
      </Pressable>

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Right Icon */}
      {searchQuery ? (
        <Pressable onPress={onClearIconPress}>
          <Icon source={rightIcon} size={24} color={rightIconColor} />
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.green100,
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
    marginHorizontal: 10,
  },
});

export default CustomSearchBar;
