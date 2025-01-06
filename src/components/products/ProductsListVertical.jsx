import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/color';
import GLOBAL_KEYS from '../../constants/globalKeys';
import formatVND from '../../utils/formatVND';
import {Icon} from 'react-native-paper';

const width = Dimensions.get('window').width;

const ProductsListVertical = props => {
  const {onItemClick} = props;

  const [title, setTitle] = useState('Món Mới Phải Thử');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.flatListWrapper}>
        <FlatList
          data={productsNewDish}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ItemProduct item={item} onItemClick={onItemClick} />
          )}
          contentContainerStyle={styles.flatListContentContainer}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

const ItemProduct = ({item, onItemClick}) => {
  return (
    <View style={styles.itemProduct}>
      <Image style={styles.itemImage} source={item.image} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{formatVND(item.price)}</Text>
      </View>
      <TouchableOpacity onPress={() => onItemClick()} style={styles.addButton}>
        <View style={styles.addButtonIcon}>
          <Icon
            source="plus"
            size={GLOBAL_KEYS.ICON_SIZE_DEFAULT}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const productsNewDish = [
  {
    id: '1',
    name: 'Combo 2 Trà Sữa Trân Châu Hoàng Kim',
    image: require('../../assets/images/imgae_product_combo/image_combo_2_milk_tea.png'),
    price: 69000,
  },
  {
    id: '2',
    name: 'Combo 3 Olong Tea',
    image: require('../../assets/images/imgae_product_combo/image_combo_3_milk_tea.png'),
    price: 79000,
  },
  {
    id: '3',
    name: 'Combo 2 Trà Sữa Trân Châu Hoàng Kim',
    image: require('../../assets/images/imgae_product_combo/image_combo_2_milk_tea.png'),
    price: 69000,
  },
  {
    id: '4',
    name: 'Combo 3 Olong Tea',
    image: require('../../assets/images/imgae_product_combo/image_combo_3_milk_tea.png'),
    price: 79000,
  },
];

const styles = StyleSheet.create({
  container: {
    marginHorizontal: GLOBAL_KEYS.GAP_DEFAULT,
  },
  title: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
    fontWeight: 'semibold',
    color: colors.black,
  },
  flatListWrapper: {
    marginHorizontal: GLOBAL_KEYS.GAP_SMALL,
    marginVertical: GLOBAL_KEYS.GAP_DEFAULT,
  },
  flatListContentContainer: {
    gap: GLOBAL_KEYS.GAP_DEFAULT,
  },
  itemProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  itemImage: {
    width: width / 4,
    height: width / 4,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
  },
  productInfo: {
    flexDirection: 'column',
    width: '50%',
  },
  productName: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_SMALL,
    fontWeight: 'semibold',
  },
  productPrice: {
    marginTop: GLOBAL_KEYS.PADDING_SMALL,
    fontSize: GLOBAL_KEYS.GAP_DEFAULT,
    color: colors.red900,
  },
  addButton: {
    justifyContent: 'flex-end',
  },
  addButtonIcon: {
    width: GLOBAL_KEYS.ICON_SIZE_DEFAULT,
    height: GLOBAL_KEYS.ICON_SIZE_DEFAULT,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    backgroundColor: colors.primary,
  },
});

export default ProductsListVertical;
