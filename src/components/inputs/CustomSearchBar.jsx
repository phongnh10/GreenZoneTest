import React from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types'; // Import thư viện PropTypes
import colors from '../../constants/color';
import { Icon } from 'react-native-paper';
import GLOBAL_KEYS from '../../constants/globalKeys';




const CustomSearchBarPropTypes = {
  placeholder: PropTypes.string,
  searchQuery: PropTypes.string.isRequired, // Dữ liệu bắt buộc
  setSearchQuery: PropTypes.func.isRequired, // Hàm bắt buộc
  onClearIconPress: PropTypes.func.isRequired, // Hàm bắt buộc
  style: PropTypes.object,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  rightIconColor: PropTypes.string,
  onLeftIconPress: PropTypes.func,
};
/**
 *
 * Usage Example
 *  <CustomSearchBar
      placeholder="Tìm kiếm ghi chú..."
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onClearIconPress={() => setSearchQuery('')}
      leftIcon="magnify"
      rightIcon="close"
      style={{ flex: 1, marginRight: 16, elevation: 3 }}
    />
 *
 */
const CustomSearchBar = ({
  placeholder = "Search",
  searchQuery,
  setSearchQuery,
  onClearIconPress,
  style = {},
  leftIcon = "magnify",
  rightIcon = "close",
  rightIconColor = colors.primary,
  onLeftIconPress,
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

CustomSearchBar.propTypes = CustomSearchBarPropTypes



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.green100,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    paddingHorizontal: GLOBAL_KEYS.PADDING_SMALL,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
    color: colors.black,
    marginHorizontal: 10,
  },
});

export default CustomSearchBar;
