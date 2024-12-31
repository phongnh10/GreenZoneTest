import { StyleSheet, Image, SafeAreaView, Text, View, ScrollView , TouchableOpacity, FlatList, TextInput} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Fontisto';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import colors from '../../constants/color';


// commit again Duong branch
const data = [
  {
    id: '1',
    title: 'GREEN ZONE',
    location: 'HCM Cao Thang',
    distance: 'Cách đây 0,7 km',
    image: 'https://minio.thecoffeehouse.com/image/admin/store/5b3b04d5fbc68621f3385253_5b3b04d5fbc68621f3385253_nguyen_20duy_20trinh.jpg',
  },
  {
    id: '2',
    title: 'GREEN ZONE',
    location: 'HCM Cao Thang',
    distance: 'Cách đây 1 km',
    image: 'https://minio.thecoffeehouse.com/image/admin/store/5bfe084efbc6865eac59c98a_to_20ngoc_20van.jpg',
  },
  {
    id: '3',
    title: 'GREEN ZONE',
    location: 'HCM Cao Thang',
    distance: 'Cách đây 3 km',
    image: 'https://minio.thecoffeehouse.com/image/admin/store/5d147678696fb3596835615c_new_20city_20.jpg',
  },
  {
    id: '4',
    title: 'GREEN ZONE',
    location: 'HCM Cao Thang',
    distance: 'Cách đây 3.1 km',
    image: 'https://minio.thecoffeehouse.com/image/admin/store/5d147678696fb3596835615c_new_20city_20.jpg',
  },
  {
    id: '5',
    title: 'GREEN ZONE',
    location: 'HCM Cao Thang',
    distance: 'Cách đây 3.3 km',
    image: 'https://minio.thecoffeehouse.com/image/admin/store/5d147678696fb3596835615c_new_20city_20.jpg',
  },
  {
    id: '6',
    title: 'GREEN ZONE',
    location: 'HCM Cao Thang',
    distance: 'Cách đây 3.5 km',
    image: 'https://minio.thecoffeehouse.com/image/admin/store/5d147678696fb3596835615c_new_20city_20.jpg',
  },
  {
    id: '7',
    title: 'GREEN ZONE',
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
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.distance}>{item.distance}</Text>
      </View>
    </View>
  );

  return (

    <SafeAreaView style={styles.container}>




      <View style={styles.content}>

      <View style={styles.tool}>

        <View style={styles.sreach}>
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

      <View>
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

      <Text style={styles.tittle}>
            Cửa hàng Khác
        </Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={styles.listscreen}
        />
      </View>
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
    paddingHorizontal: 16,
    marginTop: 45,
  },
  tool:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 8
  },
  sreach:{
    width: "70%",
    height: 42,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green100,
    borderRadius: 6,
  },
  textSreach:{
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
    fontSize: 18,
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
    padding: 12,
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
  listscreen:{
    height: "65%"
  },



})









