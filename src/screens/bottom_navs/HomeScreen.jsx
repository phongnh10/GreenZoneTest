import {
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  View,
  Text,
} from 'react-native';
import React from 'react';
import ScreenEnum from '../../constants/screenEnum';
import axiosInstance from '../../axios';

const HomeScreen = props => {
  const {navigation} = props;

  console.log('Phong test');
  console.log('Thao test');

  return (
    <SafeAreaView style={styles.container}>
      <CategoryHeadr />
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

const CategoryHeadr = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
        flex: 1,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/5997/5997060.png',
          }}
          style={{width: 30, height: 30}}
        />
        <Text style={{fontSize: 20, fontWeight: '700'}}> Danh Mục</Text>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/15714/15714554.png',
          }}
          style={{width: 30, height: 30}}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/17820/17820969.png',
          }}
          style={{width: 30, height: 30}}
        />
        <Text style={{fontSize: 20, fontWeight: '700'}}> Danh Mục</Text>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/15714/15714554.png',
          }}
          style={{width: 30, height: 30}}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
