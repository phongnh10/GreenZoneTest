import { StyleSheet, Image, SafeAreaView, Text, View, ScrollView , TouchableOpacity, FlatList, TextInput, SectionList} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Fontisto';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import colors from '../../constants/color';
import GLOBAL_KEYS from '../../constants/global_keys';
import HeaderWithbadge from '../../components/headers/HeaderWithBadge'


// commit again Duong branch
const data = [
  {
    id: '1',
    name: 'GREEN ZONE',
    location: 'HCM Cao Thang',
    distance: 'Cách đây 0,7 km',
    image: 'https://minio.thecoffeehouse.com/image/admin/store/5b3b04d5fbc68621f3385253_5b3b04d5fbc68621f3385253_nguyen_20duy_20trinh.jpg',
  },
  {
    id: '2',
    name: 'GREEN ZONE',
    location: 'HCM Cao Thang',
    distance: 'Cách đây 1 km',
    image: 'https://minio.thecoffeehouse.com/image/admin/store/5bfe084efbc6865eac59c98a_to_20ngoc_20van.jpg',
  },
  {
    id: '3',
    name: 'GREEN ZONE',
    location: 'HCM Cao Thang',
    distance: 'Cách đây 3 km',
    image: 'https://minio.thecoffeehouse.com/image/admin/store/5d147678696fb3596835615c_new_20city_20.jpg',
  },
  {
    id: '4',
    name: 'GREEN ZONE',
    location: 'HCM Cao Thang',
    distance: 'Cách đây 3.1 km',
    image: 'https://minio.thecoffeehouse.com/image/admin/store/5d147678696fb3596835615c_new_20city_20.jpg',
  },
  {
    id: '5',
    name: 'GREEN ZONE',
    location: 'HCM Cao Thang',
    distance: 'Cách đây 3.3 km',
    image: 'https://minio.thecoffeehouse.com/image/admin/store/5d147678696fb3596835615c_new_20city_20.jpg',
  },
  {
    id: '6',
    name: 'GREEN ZONE',
    location: 'HCM Cao Thang',
    distance: 'Cách đây 3.5 km',
    image: 'https://minio.thecoffeehouse.com/image/admin/store/5d147678696fb3596835615c_new_20city_20.jpg',
  },
  {
    id: '7',
    name: 'GREEN ZONE',
    location: 'HCM Cao Thang',
    distance: 'Cách đây 4 km',
    image: 'https://minio.thecoffeehouse.com/image/admin/store/5d147678696fb3596835615c_new_20city_20.jpg',
  },
];



const MerchantScreen = (props) => {

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.imageItem} />
      <View style={styles.infoItem}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.distance}>{item.distance}</Text>
      </View>
    </View>
  );
  const renderSectionHeader = ({ section }) => (
    <Text style={styles.title}>{section.title}</Text>
  );
  return (

    <SafeAreaView style={styles.container}>
      <HeaderWithbadge  title='Cửa hàng'/>
      <View style={styles.content}>
      
        <View style={styles.tool}>
          <View style={styles.search}>
            <IconFeather name="search" size={25} color={colors.primary} />
            <TextInput
              placeholder='Tìm kiếm'
              placeholderTextColor={colors.gray400}
            />
          </View>
          <View style={styles.map}>
            <IconFeather name="map-pin" size={25} color={colors.primary} />
            <Text style={styles.textMap}>
              Bản đồ
            </Text>
          </View>
        </View>

        <View style={styles.mechant1}>
          <Text style={styles.tittle}>
                Cửa hàng gần bạn
            </Text>
            <FlatList
              data={data.slice(0, 1)}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              initialNumToRender={1}
              showsVerticalScrollIndicator={false}
            />
        </View>
          

          <Text style={styles.tittle}>
              Cửa hàng Khác
          </Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
          />
      </View>

    </SafeAreaView>

  )
}

export default MerchantScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
  },
  content:{
    paddingHorizontal: GLOBAL_KEYS.PADDING_DEFAULT,
  },
  tool:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: GLOBAL_KEYS.PADDING_SMALL
  },
  search:{
    width: "70%",
    height: 42,
    flexDirection: 'row',
    paddingHorizontal: GLOBAL_KEYS.PADDING_DEFAULT,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green100,
    borderRadius: 6,
  },
  textSearch:{
    marginStart: 8,
    color: colors.gray700
  },
  map:{
    flexDirection: 'row',
    
  },
  textMap:{
    marginStart: 8,
  },
  tittle:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  distance: {
    fontSize: 12,
    color: colors.gray400,
  },
  location: {
    fontSize: 14,
    color: colors.gray850,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
  },
  infoItem: {
    flex: 1,
    gap: 16,
    marginStart: 10,
  },
  imageItem: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: GLOBAL_KEYS.PADDING_DEFAULT,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  mechant1:{
    height: '17%'
  }

})









