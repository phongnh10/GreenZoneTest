import { StyleSheet, Image , SafeAreaView } from 'react-native'
import React from 'react'

const OtherScreen = (props) => {

  return (

    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/images/bottom_other.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
    </SafeAreaView>

  )
}

export default OtherScreen


const styles = StyleSheet.create({
  container: {
    flex: 1
  }

})









