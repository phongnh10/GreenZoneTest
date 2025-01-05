import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import colors from '../../constants/color';
import GLOBAL_KEYS from '../../constants/global_keys';
import formatVND from '../../utils/formatVND';

const width = Dimensions.get('window').width;

const ProductsComboScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Combo 69K + Freeship</Text>
          <Text style={styles.timeText}>08:00:00</Text>
        </View>
        <FlatList
          data={productsCombo}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ItemProduct item={item} />}
          horizontal={true}
          contentContainerStyle={{
            gap: GLOBAL_KEYS.GAP_DEFAULT,
          }}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

const ItemProduct = ({item}) => {
  return (
    <View style={styles.itemProduct}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{formatVND(item.price)}</Text>
      </View>
      <View style={styles.productNameContainer}>
        <Text style={styles.productNameText}>{item.name}</Text>
      </View>
      <View style={styles.addButtonContainer}>
        <Image
          source={require('../../assets/icons/icon_handler/icon_add_product.png')}
          style={styles.addButton}
        />
      </View>
    </View>
  );
};

const productsCombo = [
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
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: width,
  },
  headerContainer: {
    gap: GLOBAL_KEYS.GAP_DEFAULT,
    margin: GLOBAL_KEYS.GAP_DEFAULT,
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: colors.black,
    fontSize: GLOBAL_KEYS.TEXT_SIZE_HEADER,
    fontWeight: 'semibold',
  },
  timeText: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_SMALL,
    color: colors.primary,
    marginLeft: GLOBAL_KEYS.PADDING_DEFAULT,
  },

  itemProduct: {
    backgroundColor: colors.black,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    flex: 1,
  },
  itemImage: {
    width: width / 2 - GLOBAL_KEYS.GAP_DEFAULT * 1.5,
    height: (width / 4) * 3,
    resizeMode: 'cover',
    opacity: 0.5,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
  },
  priceContainer: {
    backgroundColor: colors.white,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    position: 'absolute',
    end: 0,
    margin: GLOBAL_KEYS.PADDING_DEFAULT,
  },
  priceText: {
    color: colors.primary,
    padding: GLOBAL_KEYS.PADDING_SMALL,
    fontSize: GLOBAL_KEYS.TEXT_SIZE_SMALL,
    fontWeight: 'semibold',
  },
  productNameContainer: {
    position: 'absolute',
    bottom: '15%',
    width: '70%',
    height: '30%',
  },
  productNameText: {
    color: colors.white,
    padding: GLOBAL_KEYS.PADDING_SMALL,
    fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
    fontWeight: 'bold',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 0,
    end: 0,
    margin: GLOBAL_KEYS.PADDING_DEFAULT,
  },
  addButton: {
    width: GLOBAL_KEYS.ICON_SIZE_DEFAULT,
    height: GLOBAL_KEYS.ICON_SIZE_DEFAULT,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
  },
});

export default ProductsComboScreen;
