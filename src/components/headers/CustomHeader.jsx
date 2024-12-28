import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import IconWithBadge from './IconWithBadge';

const CustomHeader = () => {
  return (
    <View style={styles.header}>

      <View style={styles.left}>
        <Text style={styles.title}>Cá nhân</Text>
      </View>

      <View style={styles.right}>
          <IconWithBadge />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  left: {
    flex: 1,
    justifyContent: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  iconContainer: {
    marginLeft: 15,
  },
  icon: {
    fontSize: 24,
    color: 'black',
  },
});

export default CustomHeader;
