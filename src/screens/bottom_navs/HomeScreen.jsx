import {StyleSheet, Image, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import ScreenEnum from '../../constants/screenEnum';
import axiosInstance from '../../axios';

const HomeScreen = props => {
  const {navigation} = props;

  console.log('Phong test');
  console.log('Thao test');

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.navigate(ScreenEnum.ProductDetail)}>
        <Image
          source={require('../../assets/images/bottom_home.jpg')}
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
