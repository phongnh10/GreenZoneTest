import { StyleSheet, Image, SafeAreaView, View  } from 'react-native'
import React from 'react'

const ProductDetail = (props) => {

  return (

    <View style={styles.container}>
      <Image source={require('../../assets/images/product_detail.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
    </View>

  )
}

export default ProductDetail


const styles = StyleSheet.create({
  container: {
    flex: 1
  }

})









