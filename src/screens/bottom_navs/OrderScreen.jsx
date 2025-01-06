import React from 'react';
import {
  Image,
  SafeAreaView,
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ScreenEnum from '../../constants/screenEnum';
import {Icon} from 'react-native-paper';
import colors from '../../constants/color';
import GLOBAL_KEYS from '../../constants/global_keys';
const {width, height} = Dimensions.get('window');

const OrderScreen = props => {
  const {navigation} = props;

  const handleNavigateToProductDetail = () => {
    navigation.navigate(ScreenEnum.ProductDetail);
  };
  const handleNavigateToCateModal = () => {
    navigation.navigate('CategoryModal');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header handleNavigateToCateModal={handleNavigateToCateModal} />
      <Body handleNavigateToProductDetail={handleNavigateToProductDetail} />
    </SafeAreaView>
  );
};
export default OrderScreen;

const Header = ({handleNavigateToCateModal}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image
          source={require('../../assets/images/ic_category.png')}
          style={styles.icon}
        />
        <TouchableOpacity
          style={styles.headerTitle}
          onPress={handleNavigateToCateModal}>
          <Text style={styles.headTitle}>Danh Mục</Text>
          <Icon source="chevron-down" color={colors.black} size={18} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerRight}>
        <Icon source="magnify" color={colors.gray700} size={24} />
        <Icon source="heart-outline" color={colors.gray700} size={24} />
      </View>
    </View>
  );
};

const Body = ({handleNavigateToProductDetail}) => {
  // Thêm các item rỗng vào cuối danh sách để làm đầy hàng cuối
  const adjustedCategories = [
    ...categories,
    ...Array((4 - (categories.length % 4)) % 4).fill({
      id: 'placeholder',
      name: '',
      image: null,
    }),
  ];

  const renderItem = ({item}) => {
    if (item.id === 'placeholder') {
      return <View style={styles.itemContainer} />;
    }

    return (
      <TouchableOpacity
        key={item.id}
        style={styles.itemContainer}
        onPress={handleNavigateToProductDetail}>
        <View style={styles.itemImageContainer}>
          <Image style={styles.itemImage} source={item.image} />
        </View>
        <Text numberOfLines={2} style={styles.itemText}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={adjustedCategories}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={4}
      columnWrapperStyle={styles.groupContainer}
    />
  );
};

const categories = [
  {
    id: '1',
    name: 'Món mới phải thử',
    image: require('../../assets/images/ic_new_product.png'),
  },
  {
    id: '2',
    name: 'Trà trái cây',
    image: require('../../assets/images/ic_fruit_tea.png'),
  },
  {
    id: '3',
    name: 'Trà xanh',
    image: require('../../assets/images/ic_macha.png'),
  },
  {
    id: '4',
    name: 'Cà phê',
    image: require('../../assets/images/ic_coffee.png'),
  },
  {
    id: '5',
    name: 'Trà Sữa',
    image: require('../../assets/images/ic_milk_tea.png'),
  },
  {
    id: '6',
    name: 'Bánh ngọt',
    image: require('../../assets/images/ic_cake.png'),
  },
  {
    id: '7',
    name: 'Món ngon',
    image: require('../../assets/images/ic_food.png'),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: GLOBAL_KEYS.PADDING_DEFAULT,
    marginVertical: GLOBAL_KEYS.PADDING_SMALL,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: GLOBAL_KEYS.GAP_SMALL,
  },
  headTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTitle: {
    flexDirection: 'row',
    gap: GLOBAL_KEYS.GAP_SMALL,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: GLOBAL_KEYS.GAP_DEFAULT,
  },
  icon: {
    width: GLOBAL_KEYS.ICON_SIZE_DEFAULT,
    height: GLOBAL_KEYS.ICON_SIZE_DEFAULT,
  },
  //Item
  groupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: GLOBAL_KEYS.PADDING_DEFAULT,
    marginVertical: GLOBAL_KEYS.PADDING_SMALL,
  },
  itemContainer: {
    width: width / 4 - 16,
    marginVertical: GLOBAL_KEYS.PADDING_SMALL,
    alignItems: 'center',
  },
  itemImageContainer: {
    width: width / 6,
    height: width / 6,
    borderRadius: width / 12,
    backgroundColor: colors.green100,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    resizeMode: 'cover',
    borderRadius: width / 12,
  },
  itemText: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.black,
  },
});
