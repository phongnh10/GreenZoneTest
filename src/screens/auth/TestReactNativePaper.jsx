import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <SafeAreaProvider>
      <Appbar.Header>
        <Appbar.Action 
          icon='arrow-left' 
          onPress={() => console.log('Back')}
        />

        <Appbar.Content
          title="Lịch sử đơn hàng"
          titleStyle={styles.titleStyle}
        />

        <Appbar.Action icon="dots-vertical" onPress={() => console.log('Menu')} />
      </Appbar.Header>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default MyComponent;
