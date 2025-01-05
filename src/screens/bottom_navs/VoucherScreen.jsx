import { StyleSheet, Image, SafeAreaView, ImageBackground } from 'react-native'
import { View, Text } from 'react-native';
import NormalHeader from '../../components/headers/NormalHeader';
import GLOBAL_KEYS from '../../constants/global_keys';
import colors from '../../constants/color';
import LightStatusBar from '../../components/status_bars/LightStatusBar'
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const VoucherScreen = (props) => {

  return (

    <SafeAreaView style={styles.container}>
      <LightStatusBar/>
      <ImageBackground
        source={require('../../assets/images/bgvoucher.png')}
        resizeMode="cover"
        style={styles.imagebg}
      >
        <View style={styles.padding}>
          <Text style={styles.title}>Ưu đãi</Text>
          <View style={styles.content}>
            <Text style={styles.title}>Mới</Text>
            <TouchableOpacity style={styles.myticket}>
              <MaterialCommunityIcons name="ticket-confirmation-outline" size={GLOBAL_KEYS.ICON_SIZE_DEFAULT} color={colors.primary} />
              <Text style={styles.tmyvoucher}>Voucher của tôi</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.barcode}>
            <Image source={require('../../assets/images/barcode.png')} 
                    style={styles.imgcode}
            />
            <Text>M41352236</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.paddingbody}>
        <View style={styles.extension}>
          <TouchableOpacity style={styles.card}>
              <MaterialCommunityIcons name="crown" size={GLOBAL_KEYS.ICON_SIZE_DEFAULT} color={colors.yellow700}  />
              <Text style={styles.cardText}>Hạng thành viên</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
              <AntDesign name="clockcircle" size={GLOBAL_KEYS.ICON_SIZE_DEFAULT} color={colors.orange700}  />
              <Text style={styles.cardText}>Thông tin cá nhân</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.extension}>
          <TouchableOpacity style={styles.card}>
              <Feather name="shield" size={GLOBAL_KEYS.ICON_SIZE_DEFAULT} color={colors.red800}  />
              <Text style={styles.cardText}>Lịch sử mua hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
              <AntDesign name="gift" size={GLOBAL_KEYS.ICON_SIZE_DEFAULT} color={colors.primary}  />
              <Text style={styles.cardText}>Đổi thưởng</Text>
          </TouchableOpacity>
        </View>
          <View style={styles.ticket}>
            <Text style={styles.mytickettitle}>Phiếu ưu đãi của bạn</Text>
            <TouchableOpacity style={styles.allticket}>
              <Text style={styles.textall}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
      </View>
      
    </SafeAreaView>


  )
}

export default VoucherScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column'
  },
  imagebg: {
    width: '100%',
    height: "65%",
    overflow: 'hidden',
  },
  padding:{
    flexDirection: 'column',
    padding: GLOBAL_KEYS.PADDING_DEFAULT,
    gap: GLOBAL_KEYS.GAP_DEFAULT
  },
  paddingbody:{
    flexDirection: 'column',
    padding: GLOBAL_KEYS.PADDING_DEFAULT,
    gap: GLOBAL_KEYS.GAP_DEFAULT,
    marginTop: -150
  },
  title:{
    fontSize: GLOBAL_KEYS.TEXT_SIZE_HEADER,
    fontWeight: 'bold',
    color: colors.white,
  },
  content:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  myticket:{
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: GLOBAL_KEYS.PADDING_SMALL,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
  },
  tmyvoucher:{
    color: colors.primary
  },
  barcode:{
    backgroundColor: colors.white,
    padding: GLOBAL_KEYS.PADDING_DEFAULT,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    marginTop: GLOBAL_KEYS.GAP_SMALL,
    alignContent: 'center',
    alignItems: 'center',
  },
  imgcode:{
    width: "100%"
  },
  extension:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  card: {
    width: "40%",
    backgroundColor: colors.white,
    marginVertical: 10,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    padding: GLOBAL_KEYS.PADDING_DEFAULT,
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 1,
    elevation: 1,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
  },
  ticket:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  mytickettitle:{
    fontSize: GLOBAL_KEYS.TEXT_SIZE_HEADER,
    fontWeight: 'bold',
    color: colors.gray900,
  },
  allticket:{
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green500,
    padding: GLOBAL_KEYS.PADDING_SMALL,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
  },
  textall:{
    color: colors.white,
    fontWeight: 'bold',
  }

})









