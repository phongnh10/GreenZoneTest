import { StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'

const MerchantScreen = (props) => {
  console.log('Dai test merchant');
  return (

    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/images/bottom_store.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
    </SafeAreaView>

  )
}

export default MerchantScreen


const styles = StyleSheet.create({
  container: {
    flex: 1
  }

})









