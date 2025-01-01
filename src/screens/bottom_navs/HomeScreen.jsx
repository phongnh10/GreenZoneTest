import {
  Image,
  SafeAreaView,
  View,
  Text,
  FlatList,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ScreenEnum from '../../constants/screenEnum';

const {width, height} = Dimensions.get('window');

const HomeScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <Header />
      <Body navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/5997/5997060.png',
          }}
          style={{width: 20, height: 20}}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            marginLeft: 10,
            marginRight: 10,
          }}>
          Danh Mục
        </Text>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/15714/15714554.png',
          }}
          style={{width: 10, height: 10}}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/17820/17820969.png',
          }}
          style={{width: 20, height: 20, marginRight: 10}}
        />

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/2013/2013141.png',
          }}
          style={{width: 20, height: 20}}
        />
      </View>
    </View>
  );
};

const Body = ({navigation}) => {
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ScreenEnum.BottomSheet, {item: item})
            }>
            <Item item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const categories = [
  {
    id: '1',
    name: 'Trà Sữa Trái Cây',
    image:
      'https://xingfutangvietnam.com/wp-content/uploads/2021/06/tra-sua-tran-chau-e1685431912430.png',
  },
  {
    id: '2',
    name: 'GongCha',
    image:
      'https://gongcha.com.vn/wp-content/uploads/2022/06/Tra-sua-tran-chau-HK.png',
  },
  {
    id: '3',
    name: 'MayCha',
    image:
      'https://maycha.com.vn/wp-content/uploads/2023/10/tra-sua-tran-chau-vang-sua.png',
  },
  {
    id: '4',
    name: 'Sữa Tươi',
    image:
      'https://xingfutangvietnam.com/wp-content/uploads/2021/06/tra-sua-tran-chau-e1685431912430.png',
  },
  {
    id: '5',
    name: 'Trà Sữa Trái Cây',
    image:
      'https://xingfutangvietnam.com/wp-content/uploads/2021/06/tra-sua-tran-chau-e1685431912430.png',
  },
  {
    id: '6',
    name: 'GongCha',
    image:
      'https://xingfutangvietnam.com/wp-content/uploads/2021/06/tra-sua-tran-chau-e1685431912430.png',
  },
  {
    id: '7',
    name: 'Trà Sữa Trái Cây',
    image:
      'https://xingfutangvietnam.com/wp-content/uploads/2021/06/tra-sua-tran-chau-e1685431912430.png',
  },
];

const Item = ({item}) => (
  <View
    style={{
      flexDirection: 'column',
      width: (width / 10) * 2,
      alignItems: 'center',
    }}>
    <View
      style={{
        width: width / 10,
        height: width / 10,
        borderRadius: 50,
        backgroundColor: 'gray',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        source={{uri: item.image}}
      />
    </View>
    <Text
      numberOfLines={2}
      style={{fontSize: 16, fontWeight: '500', textAlign: 'center'}}>
      {item.name}
    </Text>
  </View>
);
