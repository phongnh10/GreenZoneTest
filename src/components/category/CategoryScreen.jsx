import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import GLOBAL_KEYS from '../../constants/global_keys';
import colors from '../../constants/color';

const {width} = Dimensions.get('window');

const CategoryScreen = () => {
  const categories = [
    {
      id: 1,
      name: 'Món Mới Phải Thử',
      image: require('../../assets/images/image_category/image_cake.png'),
    },
    {
      id: 2,
      name: 'Trà trái cây',
      image: require('../../assets/images/image_category/image_fruit_tea.png'),
    },
    {
      id: 3,
      name: 'Trà Xanh',
      image: require('../../assets/images/image_category/image_green_tea.png'),
    },
    {
      id: 4,
      name: 'Cafe',
      image: require('../../assets/images/image_category/image_coffee.png'),
    },
    {
      id: 5,
      name: 'Trà Sữa',
      image: require('../../assets/images/image_category/image_milk_tea.png'),
    },
    {
      id: 6,
      name: 'Bánh Ngọt',
      image: require('../../assets/images/image_category/image_cake.png'),
    },
    {
      id: 7,
      name: 'Món Ngon',
      image: require('../../assets/images/image_category/image_delicious_food.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
            <Text style={styles.itemName} numberOfLines={2}>
              {item.name}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        numColumns={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  listContainer: {},
  itemContainer: {
    alignItems: 'center',
    marginBottom: GLOBAL_KEYS.GAP_SMALL,
    width: width / 4,
  },
  imageContainer: {
    borderRadius: 34,
    backgroundColor: colors.green100,
    padding: 16,
  },
  image: {
    width: 34,
    height: 34,
    resizeMode: 'cover',
    borderRadius: 34,
  },
  itemName: {
    fontSize: 12,
    color: colors.black,
    marginTop: GLOBAL_KEYS.GAP_SMALL,
    textAlign: 'center',
    width: 68,
  },
});

export default CategoryScreen;
