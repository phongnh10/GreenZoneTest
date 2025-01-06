import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  StatusBar,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import OverlayStatusBar from '../status_bars/OverlayStatusBar';
import GLOBAL_KEYS from '../../constants/global_keys';
import colors from '../../constants/color';

const {width,height} = Dimensions.get('window');

const CategoryModal = props => {
  const {navigation} = props;

  const hideModal = () => {
    navigation.goBack();
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategorySelect = category => setSelectedCategory(category);

  const paddedCategories = [...categories];
  const remainder = categories.length % 4;
  if (remainder > 0) {
    for (let i = 0; i < 4 - remainder; i++) {
      paddedCategories.push({id: `placeholder-${i}`, label: '', image: null});
    }
  }

  return (
    <View style={styles.modalContainer}>
      <OverlayStatusBar />

      <View style={styles.modalContent}>
        {/* Header */}
        <View style={styles.header}>
          <View
            style={{
              width: GLOBAL_KEYS.ICON_SIZE_SMALL,
              height: GLOBAL_KEYS.ICON_SIZE_SMALL,
              backgroundColor: colors.transparent,
            }}
          />
          <Text style={styles.titleText}>Danh mục</Text>
          <IconButton
            icon="close"
            size={GLOBAL_KEYS.ICON_SIZE_DEFAULT}
            color={colors.black}
            onPress={hideModal}
          />
        </View>

        {/* Category List */}
        <View style={styles.categoriesContainer}>
          {paddedCategories.map((category, index) => (
            <Pressable
              key={index}
              style={[
                styles.categoryItem,
                category.label &&
                  selectedCategory.label === category.label && {
                    backgroundColor: colors.white,
                  },
              ]}
              onPress={() => category.label && handleCategorySelect(category)}>
              {category.image ? (
                <View style={styles.iconContainer}>
                  <Image source={category.image} style={styles.icon} />
                </View>
              ) : (
                <View style={styles.iconContainer} />
              )}
              <Text style={styles.categoryText}>{category.label}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

const categories = [
  {
    id: '1',
    label: 'Món mới phải thử',
    image: require('../../assets/images/ic_new_product.png'),
  },
  {
    id: '2',
    label: 'Trà trái cây',
    image: require('../../assets/images/ic_fruit_tea.png'),
  },
  {
    id: '3',
    label: 'Trà xanh',
    image: require('../../assets/images/ic_macha.png'),
  },
  {
    id: '4',
    label: 'Cà phê',
    image: require('../../assets/images/ic_coffee.png'),
  },
  {
    id: '5',
    label: 'Trà Sữa',
    image: require('../../assets/images/ic_milk_tea.png'),
  },
  {
    id: '6',
    label: 'Bánh ngọt',
    image: require('../../assets/images/ic_cake.png'),
  },
  {
    id: '7',
    label: 'Món ngon',
    image: require('../../assets/images/ic_food.png'),
  },
];

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.overlay,
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: -StatusBar.currentHeight,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: GLOBAL_KEYS.PADDING_DEFAULT,
    backgroundColor: colors.white,
  },
  titleText: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_HEADER,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
    flex: 1,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: GLOBAL_KEYS.PADDING_DEFAULT,
    backgroundColor: colors.white,
  },
  categoryItem: {
    width: '22%',
    alignItems: 'center',
    marginBottom: GLOBAL_KEYS.PADDING_DEFAULT,
    paddingVertical: GLOBAL_KEYS.PADDING_SMALL,
    paddingHorizontal: GLOBAL_KEYS.PADDING_SMALL,
    backgroundColor: colors.white,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
  },
  iconContainer: {
    borderRadius: 999,
    backgroundColor: colors.green100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: GLOBAL_KEYS.PADDING_SMALL,
  },
  icon: {
    resizeMode: 'cover',
  },
  categoryText: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
    color: colors.black,
    textAlign: 'center',
  },
});

export default CategoryModal;
