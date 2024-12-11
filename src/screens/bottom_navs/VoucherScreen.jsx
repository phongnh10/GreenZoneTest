import { StyleSheet, Image, SafeAreaView } from 'react-native'
import asyncStorage from '../../utils/myAsyncStorage'
import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const VoucherScreen = (props) => {



  const bottomSheetRef = useRef < BottomSheet > (null);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (

    // <SafeAreaView style={styles.container}>
    //   <Image source={require('../../assets/images/bottom_voucher.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
    // </SafeAreaView>

    // renders

    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>


  )
}

export default VoucherScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },

})









