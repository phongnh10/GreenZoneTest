import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const BottomSheet = ({navigation, route}) => {
  const {item} = route.params || {};

  const handleSwipeDown = event => {
    if (event.nativeEvent.translationY > 100) {
      navigation.goBack();
    }
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* <PanGestureHandler onGestureEnd={handleSwipeDown}> */}
      <View style={styles.bottomSheet}>
        <Header item={item} handleGoBack={handleGoBack} />
        <Body />
        <Bottom />
      </View>
      {/* </PanGestureHandler> */}
    </GestureHandlerRootView>
  );
};

const Header = ({item, handleGoBack}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleGoBack}>
        <Image
          style={styles.closeButton}
          source={require('../assets/icon/IconButtonClose.png')}
        />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.image}} />
      </View>
      <View style={styles.containerTilet}>
        <Text style={styles.tilet}>{item.name}</Text>
        <Image source={require('../assets/icon/HeartOutlined.png')} />
      </View>
    </View>
  );
};

const Body = () => {
  return (
    <ScrollView style={styles.bodyContainer}>
      <View style={styles.bodyContent}>
        <Text style={styles.bodyText}>
          Hương vị trà tinh tế, thơm ngon, mang đến sự thư giãn và sức khỏe
          tuyệt vời. Thích hợp để thưởng thức mỗi ngày hoặc làm quà tặng...
        </Text>
        <Text style={styles.linkText}>Xem thêm</Text>
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeTitle}>
            Size<Text style={styles.required}>*</Text>
          </Text>
          <Text style={styles.sizeDescription}>Chọn 1 loại size</Text>
        </View>
        <RadioGroupSize />
        <Text style={styles.optionTitle}>Chọn mức đường</Text>
        <RadioGroupSugar />
        <Text style={styles.optionTitle}>Chọn mức đá</Text>
        <RadioGroupIce />
        <ToppingGroup />
        <Note />
      </View>
    </ScrollView>
  );
};

const ButtonRadio = ({title, price, selected, onSelect}) => {
  return (
    <View style={styles.radioContainer}>
      <View style={styles.radioContent}>
        <TouchableOpacity onPress={onSelect}>
          {selected ? (
            <View style={styles.selectedRadio}>
              <View style={styles.selectedInnerCircle} />
            </View>
          ) : (
            <View style={styles.unselectedRadio} />
          )}
        </TouchableOpacity>
        <Text style={styles.radioTitle}>{title}</Text>
      </View>
      <Text style={styles.radioPrice}>{formatPrice(price)}</Text>
    </View>
  );
};

const RadioGroupSize = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = index => {
    setSelectedIndex(index);
  };
  const options = [
    {title: 'M', price: 50000},
    {title: 'L', price: 70000},
  ];

  return (
    <View style={styles.radioGroupContainer}>
      {options.map((option, index) => (
        <ButtonRadio
          key={index}
          title={option.title}
          price={option.price}
          selected={selectedIndex === index}
          onSelect={() => handleSelect(index)}
        />
      ))}
    </View>
  );
};

const RadioGroupSugar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = index => {
    setSelectedIndex(index);
  };
  const options = [
    {title: 'Ngọt bình thường', price: 0},
    {title: 'Ít ngọt', price: 0},
  ];

  return (
    <View style={styles.radioGroupContainer}>
      {options.map((option, index) => (
        <ButtonRadio
          key={index}
          title={option.title}
          price={option.price}
          selected={selectedIndex === index}
          onSelect={() => handleSelect(index)}
        />
      ))}
    </View>
  );
};

const RadioGroupIce = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = index => {
    setSelectedIndex(index);
  };
  const options = [
    {title: 'Đá bình thường', price: 0},
    {title: 'Ít đá', price: 0},
  ];

  return (
    <View style={styles.radioGroupContainer}>
      {options.map((option, index) => (
        <ButtonRadio
          key={index}
          title={option.title}
          price={option.price}
          selected={selectedIndex === index}
          onSelect={() => handleSelect(index)}
        />
      ))}
    </View>
  );
};

const ToppingGroup = () => {
  return (
    <View>
      <Text style={styles.optionTitle}>Thêm Topping</Text>
      <AddTopping title={'Kem sữa phô mai'} quantity={1} price={15000} />
      <AddTopping title={'Kem sữa phô mai'} quantity={1} price={15000} />
      <AddTopping title={'Kem sữa phô mai'} quantity={1} price={15000} />
    </View>
  );
};

const AddTopping = ({title, quantity, price}) => {
  const [selected, setSelected] = useState(true);

  const handSelect = () => {
    setSelected(!selected);
  };

  return (
    <View style={styles.toppingContainer}>
      {selected ? (
        <TouchableOpacity onPress={handSelect}>
          <Image source={require('../assets/icon/icon_minus_gray.png')} />
        </TouchableOpacity>
      ) : (
        <View style={styles.toppingSelectedContainer}>
          <TouchableOpacity onPress={handSelect}>
            <Image source={require('../assets/icon/icon_minus.png')} />
          </TouchableOpacity>
          <Text style={styles.toppingQuantity}>{quantity}</Text>
          <Image source={require('../assets/icon/icon_push.png')} />
        </View>
      )}
      <View style={styles.toppingInfo}>
        <Text style={styles.toppingTitle}>{title}</Text>
        <Text style={styles.toppingPrice}>{formatPrice(price)}</Text>
      </View>
    </View>
  );
};

const Note = () => {
  const arrNote = [
    'Ít cafe',
    'Đậm trà',
    'Không kem',
    'Nhiều cafe',
    'Ít sữa',
    'Nhiều sữa',
    'Nhiều kem',
  ];
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePress = index => {
    setSelectedIndex(index);
  };

  return (
    <View style={styles.noteContainer}>
      <Text style={styles.noteTitle}>Lưu ý cho món</Text>
      <View>
        {arrNote.map((note, index) => (
          <TouchableOpacity
            onPress={() => handlePress(index)}
            key={index}
            style={[
              styles.noteItem,
              {
                backgroundColor:
                  selectedIndex === index ? '#D3F9D8' : '#FFFFFF',
              },
            ]}>
            <Text style={styles.noteText}>{note}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const Bottom = () => {
  return (
    <View style={styles.bottomContainer}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.bottomInfo}>
          <Text style={styles.productQuantity}>1 sản phẩm </Text>
          <Text style={styles.totalPrice}>{formatPrice(68000)}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image source={require('../assets/icon/icon_minus.png')} />
          </TouchableOpacity>
          <Text>1</Text>
          <Image source={require('../assets/icon/icon_push.png')} />
        </View>
      </View>
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Cập nhật giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const formatPrice = price => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  headerContainer: {
    width: '100%',
    height: '45%',
    backgroundColor: 'white',
  },
  closeButton: {
    position: 'absolute',
    end: 0,
    margin: 10,
  },
  imageContainer: {
    height: '80%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  containerTilet: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 8,
    height: '20%',
  },
  tilet: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyContainer: {
    marginTop: 8,
    width: width,
    flex: 1,
    backgroundColor: 'white',
  },
  bodyContent: {
    marginHorizontal: 16,
    width: width - 32,
  },
  bodyText: {
    fontSize: 12,
    color: '#666666',
    marginTop: 8,
  },
  linkText: {
    fontSize: 12,
    color: '#018786',
    marginHorizontal: 8,
  },
  sizeContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  sizeTitle: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  required: {
    color: 'red',
  },
  sizeDescription: {
    color: '#A59F9F',
    fontSize: 12,
    marginLeft: 50,
  },
  optionTitle: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 30,
    marginTop: 8,
  },
  radioContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedRadio: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: '#299345',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#299345',
  },
  unselectedRadio: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: '#A59F9F',
  },
  radioTitle: {
    marginLeft: 8,
    color: '#343434',
    fontSize: 12,
  },
  radioPrice: {
    color: '#343434',
    fontSize: 12,
  },
  radioGroupContainer: {
    marginTop: 8,
  },
  toppingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  toppingSelectedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toppingQuantity: {
    marginHorizontal: 8,
  },
  toppingInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 100,
  },
  toppingTitle: {
    fontSize: 12,
    marginLeft: 10,
  },
  toppingPrice: {
    fontSize: 12,
    color: '#6F6F6F',
  },
  noteContainer: {
    marginTop: 16,
  },
  noteTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  noteItem: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#B1B1B1',
    marginTop: 8,
    borderRadius: 4,
  },
  noteText: {
    fontSize: 12,
  },
  bottomContainer: {
    marginTop: 8,
    padding: 10,
    width: width,
    height: '15%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottomInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: width - 32,
  },
  productQuantity: {
    fontSize: 12,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#299345',
  },
  updateButton: {
    backgroundColor: '#299345',
    borderRadius: 6,
    width: '100%',
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  updateButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
